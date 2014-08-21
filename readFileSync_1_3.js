var fs = require('fs');
var sum = 0;
var data = fs.readFileSync(process.argv[2]).toString();
for(var i = 0;i<data.length;++i){
	if(data[i] == '\n')
		sum++;
}
console.log(sum);
