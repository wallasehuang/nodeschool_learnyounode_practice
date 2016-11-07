var http = require('http');
var bl = require('bl');


// http.get(process.argv[2], function(res) {
//     res.pipe(bl(function(err, data) {
//         if (err) console.log(err);
//         console.log(data.toString());
//     }));
//     res.on('end', function() {
//         http.get(process.argv[3], function(res) {
//             res.pipe(bl(function(err, data) {
//                 if (err) console.log(err);
//                 console.log(data.toString());
//             }));
//             res.on('end', function() {
//                 http.get(process.argv[4], function(res) {
//                     res.pipe(bl(function(err, data) {
//                         if (err) console.log(err);
//                         console.log(data.toString());
//                     }));
//                 });
//             });
//         });
//     });
// });

var results = [];
var count = 0;

function printResults() {
    for (i = 0; i < process.argv.length - 2; i++) {
        console.log(results[i]);
    }
}

function httpasync(index) {
    http.get(process.argv[2 + index], function(res) {
        res.pipe(bl(function(err, data) {
            if (err) console.log(err);

            results[index] = data.toString();
            count++;
            if (count === process.argv.length - 2) {
                printResults();
            }
            // console.log(data.toString());
        }));
    });
}


for (i = 0; i < process.argv.length - 2; i++) {
    httpasync(i);
}
