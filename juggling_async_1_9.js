var http = require('http');
var async = require('async');

var urls = [];
for(var i = 2; i< process.argv.length;++i)
	urls.push(process.argv[i]);

async.map(urls,get,print);

function get(item,callback){
	http.get(item, function(res){
		var result = "";
		res.on("error",function(err){
			callback(err);
		});
		res.on("data",function(data){
			result += data;	
		});
		res.on("end",function(){
			callback(null,result);
		});
	});
}


function print(err, results){
	if(err) throw err;
	for(var i = 0;i<results.length;++i){
		console.log(results[i]);
	}
}

