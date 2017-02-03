function shiftArrays() {
	var result = [];
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].shift();  
		result[i] = arguments[i];
	}
	return result;
}
shiftArrays(['1','2','4','5','6'], [1,2]);