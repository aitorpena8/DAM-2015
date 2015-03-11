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
            var response_xml = peticion_http.responseXML;
            //console.log(peticion_http.responseText);
            var lista = document.getElementById("provincia");



            var root_xml = response_xml.getElementsByTagName("provincias");
            var opcion_xml = root_xml[0].getElementsByTagName("provincia");

            for (var i in opcion_xml) {
                var codigo_xml = opcion_xml[i].getElementsByTagName("codigo");
                var codigo = codigo_xml[0].firstChild.nodeValue;
                var nombre_xml = opcion_xml[i].getElementsByTagName("nombre");
                var nombre = nombre_xml[0].firstChild.nodeValue;
                lista.options.add(new Option(nombre, codigo));
            }
        }
    }

    function cargarListaMunicipio() {
        if (peticion_http.readyState == READY_STATE_COMPLETE) {

            var response_xml = peticion_http.responseXML;
            var lista = document.getElementById("municipio");
            var municipios = document.getElementById("municipio");


            var root_xml = response_xml.getElementsByTagName("municipios");
            var opcion_xml = root_xml[0].getElementsByTagName("municipio");
            for (var i in opcion_xml) {
                var codigo_xml = opcion_xml[i].getElementsByTagName("codigo");
                var codigo = codigo_xml[0].firstChild.nodeValue;
                var nombre_xml = opcion_xml[i].getElementsByTagName("nombre");
                var nombre = nombre_xml[0].firstChild.nodeValue;
                lista.options.add(new Option(nombre, codigo));
            }
        }
    }


    function cargarMunicipios() {
        var mun = document.getElementById("municipio");
        mun.innerHTML="";
        var url = "../servidor/cargaMunicipiosXML.php";
        var prov = document.getElementById("provincia");
        var propVal = prov.options[prov.selectedIndex].value;

        if (propVal != 0) {
            var par = "provincia=" + encodeURI(propVal);
            peticionAjax(url, "POST", cargarListaMunicipio, par);
        }
    }


    function cargarProvincias() {
        var url = "../servidor/cargaProvinciasXML.php";
        peticionAjax(url, "POST", cargarListaProvincia, null);

    }
    var prov = document.getElementById("provincia");
    cargarProvincias();
    prov.addEventListener("change", cargarMunicipios, false);


};
