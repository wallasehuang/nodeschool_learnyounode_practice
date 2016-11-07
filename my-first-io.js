var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var line = str.split('\n');
console.log(line.length - 1);
