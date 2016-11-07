var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var url_parse = url.parse(req.url, true);
    var unixtime = new Date().getTime();
    var iso = url_parse.query.iso;

    if (url_parse.pathname === '/api/parsetime') {
        var hour = new Date(iso).getHours();
        var minute = new Date(iso).getMinutes();
        var second = new Date(iso).getSeconds();
        var json = JSON.stringify({
            hour: hour,
            minute: minute,
            second: second,
        });
        res.write(json);

    } else if (url_parse.pathname === '/api/unixtime') {
        var json = JSON.stringify({
            unixtime: Date.parse(iso)
        });
        res.write(json);
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end();
});
server.listen(process.argv[2]);
