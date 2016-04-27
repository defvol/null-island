var through = require('through2');

module.exports.nullIsland = function () {
  var g = '{"type":"Point","coordinates":[0,0]}';
  return '{"type":"Feature","properties":{},"geometry":' + g + '}';
}

module.exports.throughNullIsland = function() {
  var nils = this.nullIsland;
  return through(function (chunk, _, next) {
    this.push(nils() + '\n');
    next();
  });
}
