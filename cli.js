var argv = require('minimist')(process.argv.slice(2));
var nils = require('./index');
var through = require('through2');
var split = require('binary-split');

var usage = function() {
  var text = [];
  text.push('usage: node cli.js [options]');
  text.push('');
  text.push(' --help prints this message');
  text.push(' --pipe react to stuff from the pipe');
  text.push('');
  return text.join('\n');
};

if (argv.help) {
  console.log(usage());
} else if (argv.pipe) {
  process.stdin
    .pipe(split())
    .pipe(nils.throughNullIsland())
    .pipe(process.stdout);
} else {
  console.log(usage());
}
