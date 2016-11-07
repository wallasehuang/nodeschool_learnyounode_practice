var fs = require('fs');
var path = require('path');

var filter = function(folder, ext, callback) {
    fs.readdir(folder, function(err, files) {
        if (err) return callback(err);

        var arr = [];
        files.forEach(function(file) {
            if (path.extname(file) === '.'+ext) {
            	arr.push(file);
            }
        });
        callback(null,arr);
    });
}

module.exports = filter;
