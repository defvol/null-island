var argv = require('minimist')(process.argv.slice(2));
var modu = require('./index');

var usage = function() {
  var text = [];
  text.push('usage: node cli.js [options]');
  text.push('');
  text.push(' --hello prints a message');
  text.push(' --help prints this message');
  text.push('');
  return text.join('\n');
};

if (argv.hello) {
  console.log(modu.hello());
} else if (argv.help) {
  console.log(usage());
} else {
  console.log('Command not found. Try any of the following:');
  console.log(usage());
}
