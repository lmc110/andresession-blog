var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');


// set listening port for local testing
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res, next){
res.sendFile(__dirname + '/public/home.html')
});

// set public folder for stylesheets
app.use(express.static(__dirname + '/public'));


server.listen(app.get('port'), '0.0.0.0', function() {
  console.log('Node app is running on port', app.get('port'));
});
