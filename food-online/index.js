const express = require('express')

const server = express();
const port = 4000;

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Hello World hello!')
});

server.listen(port, () => {
  console.log(`listening on port ${port}!`)
});