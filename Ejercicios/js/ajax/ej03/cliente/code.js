window.onload = function () {
    "use strict";
    var peticion_http;

    function inicializa_xhr() {
        if (window.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
    }

    function peticionAjax(url, metodo, funcion, par) {
        peticion_http = inicializa_xhr();
        if (peticion_http) {
            peticion_http.onreadystatechange = funcion;
            peticion_http.open(metodo, url, true);
            peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            peticion_http.send(par);
        }
    }




    function MostrarResultado() {
        if (peticion_http.responseText == "si") {
            document.getElementById("disponibilidad").innerHTML = "Usuario disponible";
        } else {
            document.getElementById("disponibilidad").innerHTML = "Usuario NO disponible";
        }

    }

    function validate_required(value) {
        if (value == undefined || value == null || value.length == 0 || /^\s+$/.test(value))
            return false;
        return true;
    }




    function comprobarDisponbilidad() {
        var login = document.getElementById("login");

        if (validate_required(login.value)) {
            var par = "login=" + encodeURI(login.value);
            peticionAjax("../servidor/compruebaDisponibilidad.php", "POST", MostrarResultado, par);
            //net.CargadorContenidos("servidor/compruebaDisponibilidad.php", MostrarResultado, null, "POST", par, "application/x-www-form-urlencoded");
        }
    }






    var link = document.getElementById("comprobar");
    link.addEventListener("click", comprobarDisponbilidad, false);
}
