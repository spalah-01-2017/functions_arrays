function sumOnlyBigNums(arr){
	var result = 0;
	for (var i = 0; i < arr.length; i++) {
		arr[i];
		if(arr[i] > 100 && typeof(arr[i]) != 'string'){
			result += arr[i];
		}
	}
	return result;
}

sumOnlyBigNums([3, 140, '500', 100, '', 200]);