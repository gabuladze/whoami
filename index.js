var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.listen(port, function() {
  console.log("Server started on " + port + "!");
});

app.get("/", function(req, res) {
  var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
  var software = req.headers['user-agent']
      .match(/\(([^()]+)\)/g)[0]
      .match(/[^()]/g).join("");
  var language = req.headers['accept-language'].match(/^[^,]+/g)[0];
  var result = {
    "ipaddress": ip,
    "language": language,
    "software": software
  }
  res.send(result);
});
