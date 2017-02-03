 var arr1 = [3, 5, 7, 2, 5, 12, 10];
 var arr2 = [4, "array", "elements", "here"];
 var arr3 = ["Автомобиль", "Микроволновая печь", "Стиральная машина", "Пылесос"];

 function shiftArrays() {
     var res = [];
     var argLen = arguments.length;
     for (var i = 0; i < argLen; i++) {
         temp = arguments[i].shift();

         res.push(arguments[i]);
     }
     for (var j = 0; j < res.length; j++) { console.log(res[j]); }
 }
 shiftArrays(arr1, arr2, arr3);