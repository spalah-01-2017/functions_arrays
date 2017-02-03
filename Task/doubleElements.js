var arr = [1, 2, 3, 4, 5];

function doubleElements(param) {
    var temp = [];
    for (var i = 0; i < param.length; i++) {
        temp.push(param[i]);
    }
    for (var j = 0; j < temp.length; j++) {
        arr.push(temp[j]);
    }
}
doubleElements(arr);