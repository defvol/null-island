var nils = require('./index');
var Readable = require('stream').Readable;
var test = require('tape').test;
var through = require('through2');

test('The Republic of Null Island', function (t) {
  t.plan(4);
  var geojson = JSON.parse(nils.nullIsland());
  t.equal(geojson.features.length, 1, 'has only one Feature');
  t.equal(geojson.features[0].geometry.type, 'Point', 'which is a Point');
  t.deepEqual(geojson.features[0].geometry.coordinates, [0, 0], '0°N 0°E');

  var want = nils.nullIsland().concat(nils.nullIsland());
  var rs = Readable();
  var buffer = '';
  var ts = through(function (chunk, _, next) {
    buffer += chunk;
    next();
  }, function (done) {
    t.equal(buffer.toString(), want, 'Found 2 Null Islands');
  });
  rs.pipe(nils.throughNullIsland()).pipe(ts);
  rs.push('foo\n');
  rs.push('bar\n');
  rs.push(null);
});
