	function sumOnlyBigNums(arr){
		var res = 0;
		for (var i = 0; i < arr.length; i++) {
			arr[i];
			if(arr[i] > 100 && typeof(arr[i]) != 'string'){
				res += arr[i];
			}
		}
		return res;
	}

	sumOnlyBigNums([3, 140, '500', 100, '', 200])

