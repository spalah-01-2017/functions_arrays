

// Создайте функцию doubleElements, которая будет принимать в качестве аргумента массив и возвращать новый массив с удвоенным количеством элементов.

// doubleElements([1,2,3]); // [1,2,3,1,2,3]



var mas = ["pum" , "purum", "tururum"]

function doubleElements(mas) {

    var twiceMas = [];  //масив для заполнения
    var twiceElement;    //переменная хранения элемента

    for ( var i= 0; i< mas.length;  i++ ) {

        twiceElement = mas[i] + mas[i]
        twiceMas[i] = twiceElement

    }; //запись в новый масив
    return  twiceMas;

}


doubleElements(mas)//вызов функции

