function lastArg() {
	return arguments.length === 0 ? null : arguments[arguments.length - 1];
}

console.log(lastArg(4, 2, 'Hi'));
