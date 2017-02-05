function doubleChar (str, fun) {
    var res = '';

    for (var i = 0; i < str.length; i += 1) {
        res += fun(str[i]);
    };

    return res;
}
function double(str){
	return str += str;
}

doubleChar("String", double) 