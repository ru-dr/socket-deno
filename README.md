# Socket Deno 🔌🦕

## Overview 📚

This is a simple WebSocket chat application template built with Deno 🦕 and the Oak 🐿️. It provides a starting point for developing real-time chat applications using WebSockets.

## Previews 🙈

### Home Page 🏠

![Home page](https://cdn.discordapp.com/attachments/1277870023561707643/1277870170429198346/image.png?ex=66cebcd6&is=66cd6b56&hm=17e2d7618a052faf4757bee4d9d7177081db735049237d863ceb7bfbdfbaba7c&)

### Chat Page 🗣️

![Chat Page](https://cdn.discordapp.com/attachments/1277870023561707643/1277870075159773194/image.png?ex=66cebcbf&is=66cd6b3f&hm=175acf5a956fcb06f5f5e97f881c2154cc18896c3c3ea2cb50d6b43834aec03a&)

## Features ✨

- **Real-time messaging** using WebSockets 📡
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
   git clone https://github.com/ru-dr/socket-deno.git
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

To deploy the application on Deno Deploy:

1. **Push your code to a GitHub repository** 🗂️.
2. **Connect the repository to your Deno Deploy account** 🔗.
3. **Select the framework as None**.
4. **Do not change any other configurations**.
5. **Select the root file as server.js and click deploy 🚀**.

### Demo 🌐

- [OnRender Version](https://socket-deno.onrender.com/) - Check out the live application in action
- [Deno Deploy Version](https://socket-d3no.deno.dev/) - See the app running on Deno Deploy

### Contributing 🤝

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvements.

### License 📄

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

---

Happy coding with Deno! 🦕🔌
