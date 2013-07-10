var express = require('express');
//var fs = require ('fs')
//var buffer = new Buffer;
//buffer = fs.readFileSync('index.html', 'utf8');

//buffer.write(buf.tostring(buffer);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var buf = new buffer(fs.readFileSync('index.html'));
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
