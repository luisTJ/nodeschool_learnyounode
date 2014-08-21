var http = require('http');

var url = process.argv[2];

http.get(url,print);

function print(res){
	var count = 0;
	var result = "";
	res.setEncoding("utf8");
	res.on("error",console.error);
	res.on("data",function(chunk){
		count += chunk.length;
		result += chunk;
	});
	res.on("end",function(){
		console.log(count);
		console.log(result);
	}); 
}
