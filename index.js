
module.exports.nullIsland = function () {
  var g = '{"type":"Point","coordinates":[0,0]}';
  var f = '[{"type":"Feature","properties":{},"geometry":' + g + '}]';
  return '{"type":"FeatureCollection","features":' + f + '}';
}
