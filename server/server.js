const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

PORT = process.env.PORT || 3001;

const connectDB = require("./config/connectDB");
connectDB();

app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));
app.use("/send-mail", require("./routes/mail"));
app.use("/task", require("./routes/task"));
app.use("/timeline", require("./routes/timeline"));
app.use("/client", require("./routes/client"));
app.use("/project", require("./routes/project"));
app.use("/ticket", require("./routes/ticket"));
app.use('/todo',require('./routes/todo'));
app.use('/reply',require("./routes/reply"));

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}\nTo Stop listening press Ctrl+C`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
});
io.on("connectioj", (socket) => {
  console.log(`Connected to socket.io`);
  socket.on("setup", (userData) => {
    socket.join(userData._id);
    socket.emit("connected");
  });
  socket.on("join chat", (room) => {
    socket.join(room);
    console.log("User Joined Room: " + room);
  });
  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));

  socket.on("new message", (newMessageRecieved) => {
    let chat = newMessageRecieved.chat;
    if (!chat.users) return console.log("chat.users not defined");
    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;
      socket.in(user._id).emit("message received", newMessageRecieved);
    });
  });
  socket.off("setup", () => {
    console.log("USER DISCONNECTED");
    socket.leave(userData._id);
  });
});
