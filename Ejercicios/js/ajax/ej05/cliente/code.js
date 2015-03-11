window.onload = function () {
    "use strict";
    var READY_STATE_COMPLETE = 4;
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
        if (peticion_http.readyState == READY_STATE_COMPLETE) {

            console.log(peticion_http.responseText);
            var respuesta = JSON.parse(peticion_http.responseText);
            var divDisp = document.getElementById("disponibilidad");
            divDisp.innerHTML="";
            var txt;
            var e = document.createElement("p");
            if (respuesta.disponible == "si") {

                txt = document.createTextNode("Usuario disponible");
                e.appendChild(txt);
                divDisp.appendChild(e);


            } else {
                txt = document.createTextNode("Usuario No disponible, alternativas");
                e.appendChild(txt);
                divDisp.appendChild(e);

                var ul = document.createElement("ul");

                for (var i in respuesta.alternativas) {
                    var li = document.createElement("li");
                    var litTxt = document.createTextNode(respuesta.alternativas[i]);
                    li.appendChild(litTxt);
                    ul.appendChild(li);
                }
                divDisp.appendChild(ul);
            }
        }
    }

    function validate_required(value) {
        if (value === undefined || value === null || value.length === 0 || /^\s+$/.test(value)) {
            return false;
        }
        return true;
    }




    function comprobarDisponbilidad() {
        var login = document.getElementById("login");

        if (validate_required(login.value)) {

            /*  var par = {
                  "login": login.value

              };
              var parJSON = JSON.stringify(par);*/
            var par = "login=" + encodeURI(login.value);
            peticionAjax("../servidor/compruebaDisponibilidadJSON.php", "POST", MostrarResultado, par);
            //net.CargadorContenidos("servidor/compruebaDisponibilidad.php", MostrarResultado, null, "POST", par, "application/x-www-form-urlencoded");
        }
    }






    var link = document.getElementById("comprobar");
    link.addEventListener("click", comprobarDisponbilidad, false);
};
