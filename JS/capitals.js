 function capitals(str){
        var arr = [];
        for (var i = 0; i < str.length; i++) {
          if (str[i] != str[i].toLowerCase()) {
              arr.push(i);
          }
        }
        return arr;
    }
