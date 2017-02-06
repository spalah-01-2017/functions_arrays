function doubleElements(arr) {
	var newArr = arr.slice();

	for (var i of arr) {
		newArr.push(i);
	}
	return newArr;
}

console.log(doubleElements(['a', 2, 3]));
