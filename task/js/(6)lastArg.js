function lastArg() {
	return arguments.length === 0 ? [] : arguments[arguments.length - 1];
}
lastArg(1,2,3,4,5);
