function lastArg() {
	var result = null;

	if (arguments.length == 0) {
		return result;
	} else {
		return result = arguments[arguments.length - 1];
	}
}

console.log(lastArg('a', 5, 99));