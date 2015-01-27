var http = require('http');

var port = process.env.PORT || 1337;

var server = http.createServer(function(req, res){
	res.write('Hello GovNerds!');
	res.end();
});

server.listen(port);
