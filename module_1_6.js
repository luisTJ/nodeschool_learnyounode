var readDir = require('./module_1_6_lib.js');

readDir(process.argv[2],process.argv[3],print);


function print(err,files){
	if(err){
		console.log(err);
		return;
	}
	for(var i = 0;i<files.length;++i){
		console.log(files[i]);
	}
}

