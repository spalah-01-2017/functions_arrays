function doubleElements(arr) {
    var elements = arr.length;
    for (var i=0; i<elements; i++){
        arr.push(arr[i]);
    }
    return arr;
}
doubleElements([1,2,3]);
