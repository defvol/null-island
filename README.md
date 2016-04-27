[![Build Status](https://travis-ci.org/rodowi/null-island.svg?branch=master)](https://travis-ci.org/rodowi/null-island)

# null-island

Generate GeoJSON features from the Republic of Null Island.

Useful for test fixtures and datasets to be geocoded.

Null bomb:
```bash
➜  null-island git:(from-the-cli) cat ../marco/test/fixtures/dataset.csv | node cli.js --pipe                  
{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0,0]}}
{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0,0]}}
{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0,0]}}
{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0,0]}}
{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[0,0]}}
```

JS:
```javascript
var feature = JSON.parse(nils.nullIsland());
t.deepEqual(feature.geometry.coordinates, [0, 0], '0°N 0°E');
```

Where's Null Island? [CLICK HERE](https://github.com/rodowi/null-island/blob/master/island.geojson)
