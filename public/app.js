const myUsername = prompt("Please enter your name") || "Anonymous";
const socket = new WebSocket(
  `ws://localhost:8080/start_web_socket?username=${myUsername}`
);

socket.onmessage = (m) => {
  const data = JSON.parse(m.data);

  switch (data.event) {
    case "update-users": {
      let userListHtml = "";
      for (const username of data.usernames) {
        userListHtml += `<div> ${username} </div>`;
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

function addMessage(username, message) {
  document.getElementById(
    "conversation"
  ).innerHTML += `<b> ${username} </b>: ${message} <br/>`;
}

globalThis.onload = () => {
  const inputElement = document.getElementById("data");
  let message;
  document.getElementById("data").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      message = inputElement.value;
      inputElement.value = "";
      socket.send(
        JSON.stringify({
          event: "send-message",
          message: message,
        })
      );
    }
  });
};
