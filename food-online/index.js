const express = require('express')
const server = express();
const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PORT

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Hello World hello!')
});

server.listen(port, () => {
  console.log(`listening on port ${port}!`)
});