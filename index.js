var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.listen(port, function() {
  console.log("Server starte on " + port + "!");
});

app.get("/", function(req, res) {
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var result = {
    "ipaddress": ip,
    "language": '',
    "software": ''
  }
  res.send(result);
});
