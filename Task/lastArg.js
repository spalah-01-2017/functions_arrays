var arr = [0, 2, 4, 25],
    str = "string",
    num = 335599,
    bool = false;

function lastArg() {
    var res,
        argLen = arguments.length;
    if (argLen != 0) {
        res = arguments[argLen - 1];
        return console.log(res);
    } else {
        res = null;
        return console.log(res);
    }
}
lastArg(arr, str, bool, num);