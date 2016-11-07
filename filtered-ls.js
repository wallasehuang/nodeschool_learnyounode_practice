var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
    if (err) console.log(err);

    // for (i = 0; i < files.length; i++) {
    // 	if(path.extname(files[i]) === ext){
    // 		console.log(files[i]);
    // 	}
    // }

    files.forEach(function(file){
    	if(path.extname(file) === ext){
    		console.log(file);
    	}
    });
});
