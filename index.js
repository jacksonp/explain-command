#! /usr/bin/env node
var
  https = require('https'),
  os    = require('os');


function exit () {
  process.stdout.write('Bye!' + os.EOL);
  process.exit();
}

process.stdin.resume();
process.on('SIGINT', exit);


function explain (cmd, callback) {
  https.get('https://www.mankier.com/api/explain/?cols=' + process.stdout.columns + '&q=' + encodeURIComponent(cmd), function (res) {
    res.on('data', function (d) {
      process.stdout.write(d);
    });
    res.on('end', function () {
      callback();
    });
  }).on('error', function (e) {
    console.log('Got error: ' + e.message);
  });
}

if (process.argv.length === 2) {

  process.stdout.write('Command: ');

  process.stdin.resume();
  process.stdin.setEncoding('utf8');

  process.stdin.on('data', function (text) {
    var cmd = text.trim();
    if (cmd === '' || cmd === 'quit') {
      exit();
    } else {
      explain(cmd, function () {
        process.stdout.write('Command: ');
      });
    }
  });

} else {

  var myArgs = process.argv.slice(2);
  explain(myArgs.join(' '), function () {
    process.exit();
  });

}
