/*
Реализуйте функцию shiftArrays, которая принимает сколько угодно массивов
в качестве аргументов и возвращает новый массив, состоящий из исходных массивов,
сокращенных на один первый элемент.
 */

function shiftArrays() {
    var arr = new Array();
    var childArrShifted;
    for (var i=0; i<arguments.length; i++) {
        arguments[i].shift();
        childArrShifted = arguments[i];
        arr.push(childArrShifted);
    }
    console.log(arr)
}


shiftArrays(['a','b','c'], [1,2]); // [[‘b’,’c’], [2]]