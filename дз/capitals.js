function capitals(str) {
	positions = [];
	for(i = 0;i < str.length; i++){
		if(str[i] !== str[i].toLowerCase()){
			positions.push(i);
		}
	}
	return positions;
}