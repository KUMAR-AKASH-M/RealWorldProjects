const express = require("express");
const { WebSocketServer } = require("ws");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Http server
app.get("/", (req, res) => {
  res.send("Walkie Talkie Server Running");
});

// WebSocket Server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const wss = new WebSocketServer({ server });
wss.on("connection", (ws) => {
  console.log("New client connected");
  ws.on("message", (msg) => {
    console.log("Received:", msg.toString());
    ws.send("Echo: " + msg.toString());
  });
});