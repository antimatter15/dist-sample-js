#testing the algorithm
do ->
	test = new AliasMethod [0.1, 0.3, 0.2, 0.4, 6]
	buckets = {}
	results = 0
	for i in [0..100000]
		result = test.next()
		results++
		buckets[result] = (buckets[result] || 0) + 1

	for i of buckets
		buckets[i] /= results

	console.log buckets

	test = new AliasMethod {"a": 572, "b": 1892, "x": 16}
	buckets = {}
	results = 0
	for i in [0..100000]
		result = test.next()
		results++
		buckets[result] = (buckets[result] || 0) + 1

	for i of buckets
		buckets[i] /= results

	console.log buckets

	test = new SimpleMethod [0.1, 0.3, 0.2, 0.4, 6]
	buckets = {}
	results = 0
	for i in [0..100000]
		result = test.next()
		results++
		buckets[result] = (buckets[result] || 0) + 1

	for i of buckets
		buckets[i] /= results

	console.log buckets

	test = new SimpleMethod {"a": 572, "b": 1892, "x": 16}
	buckets = {}
	results = 0
	for i in [0..100000]
		result = test.next()
		results++
		buckets[result] = (buckets[result] || 0) + 1

	for i of buckets
		buckets[i] /= results

	console.log buckets