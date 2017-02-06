function capitals(str) {
	var result = [];
	for (var i = 0; i < str.length; i += 1) {
		if (str[i] !== str[i].toLowerCase()) {
			result[i] = str.indexOf(str[i]);
		}
	}
	return result; 
}
capitals('QWErty');
