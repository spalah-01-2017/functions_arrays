function doubleChar (str, fun) {
	var result = '';
	for (var i = 0; i < str.length; i += 1) {
		result += fun(str[i]);
	};
	return result;
}
function double(str) {
	return str += str;
}
doubleChar("String", double);