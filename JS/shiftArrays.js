function shiftArrays() {
	var	elements = [];
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].shift();
		elements.push(arguments[i]);
	}
	return elements;
}

shiftArrays([1,2,3], [1,2]);