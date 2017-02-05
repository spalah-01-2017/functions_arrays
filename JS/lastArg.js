function  lastArg() {
	if(arguments.length > 0) {
		return arguments[arguments.length-1];
	} else {
		return null;
	}
}

lastArg('a', 5, 99);