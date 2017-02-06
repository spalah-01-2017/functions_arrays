function sumOnlyBigNums (arr) {
	var sum = 0;
	for (var i of arr) {
		if (i > 100 && typeof i === 'number') {
			sum += i;
		}
	}
	return sum;
}

console.log(sumOnlyBigNums([123, '3456', 13, 234, '265']));
