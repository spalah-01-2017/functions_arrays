function doubleElements(arr) {
	var arr2 = [];
	arr2 = arr.slice();
	for(i = 0; i < arr.length; i++) {
		arr2.push(arr[i]);
	}
	return arr2;
}
var arr = ['1','2','3','4','5'];
doubleElements(arr);