var net = require('net');
var moment = require('moment');

var port = Number(process.argv[2]);

server = net.createServer(handle);
server.listen(port);

function handle(socket){
	socket.write(moment().format("YYYY-MM-DD HH:mm"));
	socket.end();
}


