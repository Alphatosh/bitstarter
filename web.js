var express = require('express');

//var buffer = new Buffer;
//buffer = fs.readFileSync(index.html);

//buffer.write(buf.tostring(buffer);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
