/*
 Реализуйте функцию sumOnlyBigNums, которая будет принимать
 в качестве аргумента массив данных, а на выходе возвращать
 сумму только тех чисел, которые больше 100.
 */

function sumOnlyBigNums(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        if (typeof(arr[i]) === 'number' && arr[i] > 100) {
            sum=sum + arr[i];
        }
    }
    return sum;
}



sumOnlyBigNums([3, 140, '500', 100, '', 200]);
