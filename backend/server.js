const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*", // Change if needs specific URL
        methods: ["GET", "POST"]
    }
});

app.use(cors());

// Socket.io event handling
io.on("connection", (socket) => {
    console.log(`🔌 New user connected: ${socket.id}`);
    
    socket.on("disconnect", () => {
        console.log(`❌ User disconnected: ${socket.id}`);
    });
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});