var express = require('express');
var http = require('http');
var app = express();
app.set('port', process.env.PORT || 1337);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

app.get('/now', function(request, response) {
	var d = new Date();
	console.log("Received Date request from Mark");
	response.status(200).send({date: d});

});

app.get('/base64', function(request, response) {
	console.log("Received base64 request");
	var stringToEncode = request.query.s;
	var base64EncodedString = new Buffer(stringToEncode, 'utf8').toString('base64');
	response.status(200).send(base64EncodedString);
});