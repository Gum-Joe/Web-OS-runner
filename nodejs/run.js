// Runs web-app
var express = require('express');
var spawn = require('child_process')
var app = express();

var port = process.env.TUB_RECIEVER_PORT
app.listen(port, function () {
  console.log('Listening...');
});

app.get('/', function (req, res) {
  res.send('Starting Web-app...')
  var w = spawn.spawn('sh', ['./start.sh'])
  w.stdout.on('data', function (data) {
    res.send(data)
  });
  w.stderr.on('data', function (data) {
    res.send(data)
  });
});
