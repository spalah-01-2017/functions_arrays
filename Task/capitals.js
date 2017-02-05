var str = 'Hello World';
var alphabet = 'abcdef';

function capitals(str) {
	var UpperCase = [];
    for (var i = 0; i < str.length; i++) {
    	str[i];
    	if(str[i] != str[i].toLowerCase()){
    		UpperCase.push(i);
    	}
    }
    return UpperCase;
}

capitals(str);