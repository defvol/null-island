var test = require('tape').test;
var nils = require('./index');

test('The Republic of Null Island', function (t) {
  t.plan(3);
  var geojson = JSON.parse(nils.nullIsland());
  t.equal(geojson.features.length, 1, 'has only one Feature');
  t.equal(geojson.features[0].geometry.type, 'Point', 'which is a Point');
  t.deepEqual(geojson.features[0].geometry.coordinates, [0, 0], '0°N 0°E');
});
