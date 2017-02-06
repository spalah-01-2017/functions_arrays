function doubleChar (str, fun) {
    var res = '';
    for (var i of str) {
        res += fun(i);
    };
    return res;
}

function double(str) {
	return str + str;
}

console.log(doubleChar("String", double));
