var car = ['BMW','Citroen','Ford','Mazda'];
var year = [2012,2016,2005,2017];

function shiftArrays(){
	var	res = [];
	for (var i = 0; i < arguments.length; i++) {
		arguments[i].shift();
		res.push(arguments[i]);
	}
	return res;
}

shiftArrays(car,year);