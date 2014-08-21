var fs = require('fs');


function lineCount(err,data){
	if(err) throw err;
	var sum = 0;
	for(var i = 0;i<data.length;++i){
		if(data[i] == '\n')
			++sum;
	}
	console.log(sum);
}
fs.readFile(process.argv[2],"utf8",lineCount);
