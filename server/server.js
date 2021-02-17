const express = require("express");
const app = express;
const dotenv = require("dotenv");
const colors = require("colors");
const server = require("http").Server(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

dotenv.config();

const PORT = 9090 || process.env.PORT;

io.on("connection", (socket) => {
  console.log(`User ${socket.id} conneted`.yellow);

  socket.on("button-click", (data) => {
    io.emit("change-button-state", data);
  });

  socket.on("disconnect", () => {
    console.log(`User: ${socket.id} disconnected`.red);
  });
});

server.listen(PORT, (err) => {
  if (err) {
    console.log(`Error! : ${err}`.red.bold);
    throw Error(err);
  }
  console.log(`listening on: ${PORT}`.green.bold);
});
