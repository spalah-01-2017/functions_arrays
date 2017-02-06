function capitals(str) {
  var result = [];
  
  for (var i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() == str[i] && str[i] != '.' && str[i] != ' ') {
      result.push(i);
    }
  }
  
  return result;
}

var str = 'Hello World';
console.log(capitals(str));