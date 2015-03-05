function comprobar() {

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni = document.getElementById("dni").value;
    var arr = dni.split("-");
    if (arr.length != 2) {
        alert("FORMATO INCORRECTO");
        return;
    }
    var inNum = arr[0];

    var inLet = arr[1];
    if (typeof inLet != String || inNum.length != 8) {
        alert("FORMATO INCORRECTO");
        return;
    }
    inLet = inLet.toUpperCase;

    if (inNum < 0 || inNum > 99999999)
        alert("NUMERO ERRONEO");
    else {

        var resto = inNum % 23;
        var letraCorrect = letras[resto];

        if (letras[resto] != inLet) {
            alert("LETRA ERRONEO");

        } else {
            alert("DNI CORRECTO");

        }

    }
}
