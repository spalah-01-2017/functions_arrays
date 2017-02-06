function sumOnlyBigNums(arr) {

 	var result = 0;

 	for(var i = 0; i < arr.length; i++) {
 		if (arr[i] > 100 && typeof(arr[i]) === 'number') {
			result += arr[i];
		}
	}

  	return result;
}

console.log(sumOnlyBigNums([3, 140, '500', 100, '', 200]));