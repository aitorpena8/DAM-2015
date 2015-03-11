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



    function cargarListaProvincia() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            var provincia = JSON.parse(peticion_http.responseText);
            var lista = document.getElementById("provincia");
            for (var codigo in provincia) {
                lista.options.add(new Option(provincia[codigo], codigo));

            }
        }
    }

    function cargarListaMunicipio() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {
            var muncipio = JSON.parse(peticion_http.responseText);
            var lista = document.getElementById("municipio");
            for (var codigo in muncipio) {
                lista.options.add(new Option(muncipio[codigo], codigo));

            }


        }
    }


    function cargarMunicipios() {
        var mun = document.getElementById("municipio");
        mun.innerHTML = "";
        var url = "../servidor/cargaMunicipiosJSON.php";
        var prov = document.getElementById("provincia");
        var propVal = prov.options[prov.selectedIndex].value;

        if (propVal !== 0) {
            var par = "provincia=" + encodeURI(propVal);
            peticionAjax(url, "POST", cargarListaMunicipio, par);
        }
    }


    function cargarProvincias() {
        var url = "../servidor/cargaProvinciasJSON.php";
        peticionAjax(url, "POST", cargarListaProvincia, null);

    }
    var prov = document.getElementById("provincia");
    cargarProvincias();
    prov.addEventListener("change", cargarMunicipios, false);


};
