function lastArg() {
	var last;
	var nul = null;
	var empty = [];
	return last = arguments === empty ? nul : arguments[arguments.length - 1];
}

lastArg(1,2,3,4,5);
lastArg(); // ???