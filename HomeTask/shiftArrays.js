function shiftArrays() {
	var newArray = [];
	for (var i of arguments) {
		i.shift()
		newArray.push(i);
	}
	return newArray;
}

console.log(shiftArrays([1, 2, 3, 5], ['a', 'd', 'r']));
