var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.listen(port, function() {
  console.log("Server starte on " + port + "!");
});

app.get("/", function(req, res) {
  res.send(req.ips);
});
