/*
 Реализуйте функцию double таким образом, чтобы пример ниже заработал.

 function doubleChar (str, fun) {
 var res = '';

 for (var i = 0; i < str.length: i += 1) {
 res += fun(str[i]);
 };

 return res;
 }

 doubleChar("String", double) // "SSttrriinngg
 */

function doubleChar (str, fun) {
    var res = '';
    for (var i = 0; i < str.length; i += 1) {
        res += fun(str[i]);
    }
    return res;
}

function double(letter) {
    var doubledLetter;
    doubledLetter = letter + letter;
    return doubledLetter;
}


doubleChar("String", double); // "SSttrriinngg