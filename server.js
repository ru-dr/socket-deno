import { Application, Router } from "@oak/oak";

const connectedClients = new Map();

const app = new Application();
const port = 8080;
const router = new Router();

function broadcast(message) {
  for (const client of connectedClients.values()) {
    try {
      client.send(message);
    } catch (error) {
      console.error("Error broadcasting message:", error);
    }
  }
}

function broadcast_usernames() {
  const usernames = [...connectedClients.keys()];
  console.log(
    "Sending updated username list to all clients: " + JSON.stringify(usernames)
  );
  broadcast(
    JSON.stringify({
      event: "update-users",
      usernames: usernames,
    })
  );
}

router.get("/start_web_socket", async (ctx) => {
  const socket = await ctx.upgrade();
  const username = ctx.request.url.searchParams.get("username");
  if (connectedClients.has(username)) {
    socket.close(1008, `Username ${username} is already taken`);
    return;
  }
  socket.username = username;
  connectedClients.set(username, socket);
  console.log(`New client connected: ${username}`);

  socket.onopen = () => {
    broadcast_usernames();
  };

  socket.onclose = () => {
    console.log(`Client ${socket.username} disconnected`);
    connectedClients.delete(socket.username);
    broadcast_usernames();
  };

  socket.onmessage = async (m) => {
    try {
      const data = JSON.parse(m.data);
      switch (data.event) {
        case "send-message":
          await broadcast(
            JSON.stringify({
              event: "send-message",
              username: socket.username,
              message: data.message,
            })
          );
          break;
        default:
          console.warn("Unknown event:", data.event);
      }
    } catch (error) {
      console.error("Error handling message:", error);
    }
  };

  socket.onerror = (error) => {
    console.error("WebSocket error:", error);
  };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(async (context) => {
  await context.send({
    root: `${Deno.cwd()}/`,
    index: "public/index.html",
  });
});

console.log("Listening at http://localhost:" + port);
await app.listen({ port });
