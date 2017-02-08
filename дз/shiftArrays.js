function shiftArrays(arr){
	newAr = [];
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].shift();
		newAr.push(arguments[i]);
	}
	return newAr;
}
