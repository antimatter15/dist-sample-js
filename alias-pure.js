function AliasMethod(object){
	this.labelmap = [];
	var prob = [], sum = 0;
	for(var label in object){
		if(object.hasOwnProperty(label)){
			this.labelmap.push(label)
			prob.push(object[label])
			sum += object[label];
		}
	}
	this.alias = []
	this.prob = []
	var small = [], large = [], avg = 1 / prob.length, less, more;
	for(var i = 0; i < prob.length; i++)
		(((prob[i] /= sum) >= avg) ? large : small).push(i);
	while((less = small.pop()) !== undefined && (more = large.pop()) !== undefined){
		this.prob[less] = prob[less] * prob.length;
		this.alias[less] = more;
		(((prob[more] += prob[less] - avg) >= avg) ? large : small).push(more)
	}
	small = small.concat(large);
	while(small.length) this.prob[small.pop()] = 1;
}
AliasMethod.prototype.next = function(){
	var col = Math.floor(Math.random() * this.prob.length);
	return this.labelmap[(Math.random() < this.prob[col]) ? col : this.alias[col]]
}