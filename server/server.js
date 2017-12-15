// const express = require("express");
// const http = require("http");
// const WebSocket = require("ws");
// const osc = require("node-osc");

// const app = express();

// app.use(function(req, res) {
//   res.send({ msg: "hello" });
// });

// const server = http.createServer(app);
// const wss = new WebSocket.Server({ server });

// wss.on("connection", function connection(ws) {
//   ws.isAlive = true;

//   const sendMessage = message => {
//     messageString = JSON.stringify(message.args);
//     if (!ws) {
//       return;
//     }
//     console.log("sending OSC message");
//     ws.send(messageString);
//   };
//   var oscServer = new osc.Server(3333, "0.0.0.0");

//   oscServer.on("message", function(msg, rinfo) {
//     console.log("TUIO message:");
//     console.log(msg);
//   });

//   ws.on("message", function incoming(message) {
//     console.log("ws received: %s", message);
//   });
// });

// server.listen(4242, function listening() {
//   console.log("Listening on %d", server.address().port);
// });

var osc = require('node-osc');

var oscServer = new osc.Server(3333, '0.0.0.0');

oscServer.on("message", function (msg, rinfo) {
      console.log("TUIO message:");
      console.log(msg);
});

console.log('listening started');