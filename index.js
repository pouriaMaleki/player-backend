const express = require('express');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');
const callAPI = require('./callAPI');

const app = express();
app.use(cors());
const server = http.createServer(app);

io = socket(server);
io.on('connection', function (socket) {
  socket.on('request', function (data, response) {
    callAPI(data).then(response);
  });
});

app.get('/', (req, res) => {
  // call http API
});

server.listen(3001, () => console.log('server started on port 3001'));