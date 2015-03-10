"use strict";
var READY_STATE_UNINITIALIZED = 0;
var READY_STATE_LOADING = 1;
var READY_STATE_LOADED = 2;
var READY_STATE_INTERACTIVE = 3;
var READY_STATE_COMPLETE = 4;

var estados = ["No Inicializada", "Cargando", "Cargado", "Interactivo", "Completada"];

var peticion_http;
var peticion_date;

function cargaContenido(url, metodo, funcion) {
    document.getElementById("estados").innerHTML = "";
    document.getElementById("codigo").innerHTML = "";
    document.getElementById("contenidos").innerHTML = "";
    document.getElementById("cabeceras").innerHTML = "";
    peticion_http = inicializa_xhr();
    peticion_date = new Date();

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

    var current_date = new Date();
    var dif = new Date(current_date.getTime() - peticion_date.getTime());
    var elapsedStr = dif.getSeconds() + ":" + dif.getMilliseconds();

    document.getElementById("estados").innerHTML += "[" + elapsedStr + "]" + estados[peticion_http.readyState] + "</br>";

    if (peticion_http.readyState == READY_STATE_COMPLETE) {
        if (peticion_http.status == 200) {
            document.getElementById("codigo").innerHTML = peticion_http.status + "</br>" + peticion_http.statusText;
            document.getElementById("contenidos").innerHTML = peticion_http.responseText;
            document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();

        } else {
            document.getElementById("codigo").innerHTML = peticion_http.status + "</br>" + peticion_http.statusText;
            document.getElementById("cabeceras").innerHTML = peticion_http.getAllResponseHeaders();

        }
    }
}


function rellenarRecurso() {
    document.getElementById("recurso").value = document.URL;
}

function descargaArchivo() {
    var file = "vegiesipsum.txt"
    var url = document.getElementById("recurso").value + file;
    cargaContenido(url, "GET", muestraContenido);
}

window.onload = function () {
    rellenarRecurso();
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", descargaArchivo, false);
};
