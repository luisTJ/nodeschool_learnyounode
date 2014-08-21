var http = require('http');
var url = require('url');
var moment = require('moment');

var port = Number(process.argv[2]);
var server = http.createServer(function(req,res){
	var param = url.parse(req.url,true);
	var date = moment(param.query.iso);	
	var result = {};
	if(param.pathname === '/api/parsetime'){
		result.hour = date.hours();
		result.minute = date.minutes();
		result.second = date.seconds();
	}
	else if(param.pathname === '/api/unixtime'){
		result.unixtime = date.valueOf(); 
	}
	console.log(result);
	res.writeHead(200, {'Content-Type':'application/json'});
	res.end(JSON.stringify(result));
});

server.listen(port);
