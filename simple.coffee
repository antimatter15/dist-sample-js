class SimpleMethod
	constructor: (object) ->
		@probabilities = []
		@labelmap = [] #handle objects of stuff
		for label of object
			if object.hasOwnProperty label
				@labelmap.push label
				@probabilities.push object[label]
		@sum = 0; @sum += p for p in @probabilities

	next: ->
		num = @sum * Math.random()
		p = 0
		i = 0
		while true
			p += @probabilities[i]
			if num < p
				return @labelmap[i]
			i++