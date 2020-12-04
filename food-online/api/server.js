const express = require('express')
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
dotenv.config()

const restrict = require("../middleware/restrict");
const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");

const server = express();


server.use(cors());
server.use(helmet());
server.use(express.json())
server.use(cookieParser());

server.use("/auth", authRouter);
server.use("/users", restrict(), usersRouter)

server.get('/', (req, res) => {
  res.send('Hello World!')
});

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong"
    })
})

module.exports = server;