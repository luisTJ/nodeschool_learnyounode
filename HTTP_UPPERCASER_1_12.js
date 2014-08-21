var map = require('through2-map');
var http = require('http');

var port = Number(process.argv[2]);
var map = require('through2-map');
var uppr = map({wantStrings: true}, function(str){
	return str.toUpperCase();
});

var server = http.createServer(function(req,res){
	req.pipe(uppr).pipe(res);
});

server.listen(port);
