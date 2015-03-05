function factorial(inNum) {
    var res = 1;
    var num=inNum.value;
    for (var n =num;n > 1;n--)
        res *= n;
    document.getElementById("res").innerHTML = res;
}
