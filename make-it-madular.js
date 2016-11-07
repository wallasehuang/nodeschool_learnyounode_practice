var filter = require('./make-it-madular-module.js');

var folder = process.argv[2];
var ext =  process.argv[3];

filter(folder, ext, function(err, files) {
    if (err) console.log(err)

    files.forEach(function(file){
    	console.log(file);
    });
});
