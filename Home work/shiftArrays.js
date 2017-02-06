function shiftArrays(){
	var	result = [];
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].shift();
		result.push(arguments[i]);
	}
	return result;
}

console.log(shiftArrays(['a','b','c'], [1,2]));