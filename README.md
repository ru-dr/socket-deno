# Socket Deno 🔌🦕

## Overview 📚

This is a simple WebSocket chat application template built with Deno 🦕 and the Oak 🐿️. It provides a starting point for developing real-time chat applications using WebSockets.

## Features ✨

- **Real-time messaging** using WebSockets 📡
- **Supports multiple chat rooms** 🏠
- **Displays online users** in each room 👥
- Powered by **Deno** and the **Oak** web framework 🚀

## Getting Started 🚀

### Setup on Render 🛠️

**Deno**: The project uses Deno as the runtime. It's automatically installed during the build process.

- **Environment Variable**:

  - `DENO_INSTALL` should be set to `/opt/render/project/.deno`.

- **Build Command**:  
  This command installs Deno on the Render platform:

  ```sh
  curl -fsSL https://deno.land/install.sh | sh
  ```

- **Start Command**:  
  This command sets up the environment and starts the application:

  ```sh
  export PATH="$DENO_INSTALL/bin:$PATH" && deno run --allow-net --allow-read server.js
  ```

### Local Development 💻

If you want to run the application locally, follow these steps:

1. **Install [Deno](https://deno.land/) on your machine** 🦕.

2. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/socket-deno-template.git
   ```
3. **Navigate to the project directory**:

   ```sh
   cd socket-deno-template
   ```
4. **Start the development server**:
   
   ```sh
   deno run --allow-net --allow-read server.js
   ```

### Usage 📡

Once the application is running, you can connect to the WebSocket server using a client (e.g., a web browser or a WebSocket client tool). The application supports basic real-time messaging.

### Deployment 🚀

To deploy the application on Render:

1. **Push your code to a GitHub repository** 🗂️.
2. **Connect the repository to your Render account** 🔗.
3. **Configure the environment variable and commands** as described above 🛠️.
4. **Deploy your service** 🚀.

### Contributing 🤝

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

### License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Happy coding with Deno! 🦕🔌