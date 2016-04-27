var nils = require('./index');
var Readable = require('stream').Readable;
var test = require('tape').test;
var through = require('through2');

test('The Republic of Null Island', function (t) {
  t.plan(5);
  var feature = JSON.parse(nils.nullIsland());
  t.equal(feature.type, 'Feature', 'has only one Feature');
  t.equal(feature.geometry.type, 'Point', 'which is a Point');
  t.deepEqual(feature.geometry.coordinates, [0, 0], '0°N 0°E');

  var want = nils.nullIsland().concat('\n' + nils.nullIsland() + '\n');
  var rs = Readable();
  var buffer = '';
  var ts = through(function (chunk, _, next) {
    buffer += chunk;
    next();
  }, function (done) {
    t.equal(buffer.toString(), want, 'Found 2 Null Islands');
    var hazFeatureCollection = buffer.toString().match(/FeatureCollection/);
    t.false(hazFeatureCollection, 'cannot haz FeatureCollection');
  });
  rs.pipe(nils.throughNullIsland()).pipe(ts);
  rs.push('foo\n');
  rs.push('bar\n');
  rs.push(null);
});
