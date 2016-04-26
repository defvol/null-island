var through = require('through2');

module.exports.nullIsland = function () {
  var g = '{"type":"Point","coordinates":[0,0]}';
  var f = '[{"type":"Feature","properties":{},"geometry":' + g + '}]';
  return '{"type":"FeatureCollection","features":' + f + '}\n';
}

module.exports.throughNullIsland = function() {
  var nils = this.nullIsland;
  return through(function (chunk, _, next) {
    this.push(nils());
    next();
  });
}
