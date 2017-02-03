function lineLength([a, b], [c, d]){
	var result = Math.sqrt(Math.pow((c-a),2) + Math.pow((d-b),2))
	return result;
}

lineLength([1,3],[5,5]);