var READY_STATE_UNINITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var estados=["No Inicializada","Cargando","Cargado","Interactivo","Completada"];

var peticion_http;

function cargaContenido(url, metodo, funcion) {
    peticion_http = inicializa_xhr();

    if (peticion_http) {
        peticion_http.onreadystatechange = funcion;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null);
    }
}

function inicializa_xhr() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function muestraContenido() {

    document.getElementById("estados").innerHTML = peticion_http.readyState;
    document.getElementById("codigo").innerHTML = peticion_http.readyState;

    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == 200) {
            document.getElementById("contenidos").innerHTML=peticion_http.responseText;
            document.getElementById("cabeceras").innerHTML=peticion_http.getAllResponseHeaders();

        }
    }
}


function rellenarRecurso() {
    document.getElementById("recurso").value = document.URL;
}

function descargaArchivo() {
    cargaContenido("http://localhost/vegiesipsum.txt", "GET", muestraContenido);
}

document.addEventListener("load", function () {
    rellenarRecurso();
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", descargaArchivo, false);

}, false);

