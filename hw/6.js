/*
 Реализовать функцию lastArg, которая возвращает последний аргумент из переданных.
 Если функция запущена без аргументов, возвращать null.
 */

function lastArg() {
    var argLen = arguments.length - 1;
    if (argLen>0){
        return arguments[argLen];
    }
    return null;
}

lastArg(); //null
lastArg('a', 5, 99); //99