const express = require("express");
const cors = require('cors');
require('dotenv').config();
const ConnectDB = require('./utils/ConnectDB');
const Post = require("./models/Post/Post");
const postRouter = require("./router/post/postRouter");

ConnectDB();
const app = express();
app.use(express.json());

const corsOptions = {
  origin: ["https://blogger-app-frontend-omega.vercel.app/"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies to be sent with requests if needed
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

const PORT = 5000;
app.use(cors(corsOptions));

app.use("/api/v1", postRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found on our server" });
});

app.use((err, req, res, next) => {
  
  const message = err.message;
  const stack = err.stack;
  res.status(500).json({
    message,
    stack,
  });
});

app.listen(
  PORT, console.log(`Server is running on port ${PORT}`)
)
