function sumOnlyBigNums(arr){
	summ = 0;
	for(i = 0;i < arr.length; i++){
		if(typeof arr[i] === 'number' && arr[i] > 100){
			summ += arr[i];
		}
	}
	return summ;
}