var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
	 req.pipe(map(function (chunk) {
       return chunk.toString().split('').join('').toUpperCase();
     })).pipe(res);
});
server.listen(process.argv[2]);
