let socket;

document.getElementById("submit-username").addEventListener("click", () => {
  const myUsername = document.getElementById("username").value || "Anonymous";
  document.getElementById("data").disabled = false;

  const wsUrl =
    window.location.hostname === "localhost"
      ? `ws://localhost:8080/start_web_socket?username=${myUsername}`
      : `wss://${window.location.hostname}/start_web_socket?username=${myUsername}`;

  socket = new WebSocket(wsUrl);

  socket.onopen = () => {
    console.log("WebSocket connection established.");
  };

  socket.onmessage = (m) => {
    const data = JSON.parse(m.data);

    switch (data.event) {
      case "update-users": {
        let userListHtml = "";
        for (const username of data.usernames) {
          userListHtml += `<div>${username}</div>`;
        }
        document.getElementById("users").innerHTML = userListHtml;
        break;
      }

      case "send-message": {
        addMessage(data.username, data.message);
        break;
      }
    }
  };

  socket.onclose = () => {
    console.log("WebSocket connection closed.");
  };

  socket.onerror = (error) => {
    console.log("WebSocket error:", error);
  };

  document.getElementById("data").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const message = e.target.value;
      e.target.value = "";
      if (message.trim()) {
        socket.send(
          JSON.stringify({
            event: "send-message",
            message: message,
          })
        );
      }
    }
  });

  // Show the chat UI and hide the welcome container
  document.querySelector(".welcome-container").style.display = "none";
  document.querySelector(".conv").style.display = "flex";
});

function addMessage(username, message) {
  document.getElementById("conversation").innerHTML += `<span class="message">
        <span class="username">${username}:</span>
        <span class="message-text">${message}</span>
      </span>`;
}
