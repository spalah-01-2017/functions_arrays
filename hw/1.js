/*
 Создайте функцию doubleElements, которая будет принимать
 в качестве аргумента массив и возвращать новый массив
 с удвоенным количеством элементов.
 */

function doubleElements(arr) {
    var arrLength = arr.length;
    for (var i=0; i<arrLength; i++){
        arr.push(arr[i]);
    }
    console.log(arr);
}
doubleElements([1,2,3]);