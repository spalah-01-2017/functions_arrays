function lineLength (fir, sec) {
	var res = Math.sqrt(Math.pow((sec[0] - fir[0]), 2)
			+ Math.pow((sec[1] - fir[1]), 2));
	if (res) {
		return res;
	} else {
		return 'Some arguments is NaN!'
	}
}

console.log(lineLength([3, 2], [4,'8']));
