// Generated by CoffeeScript 1.3.3

(function() {
  var buckets, i, result, results, test, _i, _j, _k, _l;
  test = new AliasMethod([0.1, 0.3, 0.2, 0.4, 6]);
  buckets = {};
  results = 0;
  for (i = _i = 0; _i <= 100000; i = ++_i) {
    result = test.next();
    results++;
    buckets[result] = (buckets[result] || 0) + 1;
  }
  for (i in buckets) {
    buckets[i] /= results;
  }
  console.log(buckets);
  test = new AliasMethod({
    "a": 572,
    "b": 1892,
    "x": 16
  });
  buckets = {};
  results = 0;
  for (i = _j = 0; _j <= 100000; i = ++_j) {
    result = test.next();
    results++;
    buckets[result] = (buckets[result] || 0) + 1;
  }
  for (i in buckets) {
    buckets[i] /= results;
  }
  console.log(buckets);
  test = new SimpleMethod([0.1, 0.3, 0.2, 0.4, 6]);
  buckets = {};
  results = 0;
  for (i = _k = 0; _k <= 100000; i = ++_k) {
    result = test.next();
    results++;
    buckets[result] = (buckets[result] || 0) + 1;
  }
  for (i in buckets) {
    buckets[i] /= results;
  }
  console.log(buckets);
  test = new SimpleMethod({
    "a": 572,
    "b": 1892,
    "x": 16
  });
  buckets = {};
  results = 0;
  for (i = _l = 0; _l <= 100000; i = ++_l) {
    result = test.next();
    results++;
    buckets[result] = (buckets[result] || 0) + 1;
  }
  for (i in buckets) {
    buckets[i] /= results;
  }
  return console.log(buckets);
})();
