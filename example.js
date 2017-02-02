function forEachSecond(str, action) {
  var result = '';
  for (var i = 0, len = str.length; i < len; i += 1) {
      result += i % 2 ? action(str[i]) : str[i];
  }
  return result;
}

forEachSecond('abcdef', function(char) {
  return char.toUpperCase();
}) // "aBcDeF"

//////////////////

function getLast(arr) {
	return arr[arr.length - 1];
}

//////////////////

// Пример работы с многомерным массивом. 
var matrix = [['x', 'o', 'o'],
              ['o', 'x', 'o']];

matrix[0]; // ['x', 'o', 'o']
matrix[1]; // ['o', 'x', 'o']
matrix[0][2]; // 'o'

var i, j, row;
for (i = 0; i < matrix.length; i++) {
    row = matrix[i];
    for (j = 0; j < row.length; j++) {
        console.log('row ' + i, 'cell ' + j, row[j]);
    };
};
