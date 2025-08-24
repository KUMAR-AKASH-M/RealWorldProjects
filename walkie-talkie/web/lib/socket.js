let socket;

export const connectSocket = () => {
  socket = new WebSocket("ws://localhost:5000");
  socket.onopen = () => {
    console.log("connected to server");
  };
  socket.onmessage = (msg) => console.log("Server:", msg.data);
};

export const sendMessage =(msg) => {
    if (socket?.readyState === WebSocket.OPEN) {
        socket.send(msg);
    }
};