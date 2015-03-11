window.onload = function () {
    "use strict"
    /*
        var net = new Object();
        // Constructor
        net.CargadorContenidos = function (url, funcion, funcionError, metodo, parametros, contentType) {
            this.url = url;
            this.req = null;
            this.onload = funcion;
            this.onerror = (funcionError) ? funcionError : this.defaultError;
            console.log(this.cargaContenidoXML);
            this.CargadorContenidos(url, metodo, parametros, contentType);
        };

        net.READY_STATE_UNINITIALIZED = 0;
        net.READY_STATE_LOADING = 1;
        net.READY_STATE_LOADED = 2;
        net.READY_STATE_INTERACTIVE = 3;
        net.READY_STATE_COMPLETE = 4;

        net.CargadorContenidos.prototype = {
            cargaContenidoXML: function (url, metodo, parametros, contentType) {
                if (window.XMLHttpRequest) {
                    this.req = new XMLHttpRequest();
                } else if (window.ActiveXObject) {
                    this.req = new ActiveXObject("Microsoft.XMLHTTP");
                }

                if (this.req) {
                    try {
                        var loader = this;
                        this.req.onreadystatechange = function () {
                            loader.onReadyState.call(loader);
                        };
                        this.req.open(metodo, url, true);
                        if (contentType) {
                            this.req.setRequestHeader("Content-Type", contentType);
                        }
                        this.req.send(parametros);
                    } catch (err) {
                        this.onerror.call(this);
                    }
                }
            },

            onReadyState: function () {
                var req = this.req;
                var ready = req.readyState;
                if (ready == net.READY_STATE_COMPLETE) {
                    var httpStatus = req.status;
                    if (httpStatus == 200 || httpStatus == 0) {
                        this.onload.call(this);
                    } else {
                        this.onerror.call(this);
                    }
                }
            },

            defaultError: function () {

                document.getElementById("disponibilidad").innerHTML = "Se ha producido un error al obtener los datos" + "\n\nreadyState:" + this.req.readyState + "\nstatus: " + this.req.status + "\nheaders: " + this.req.getAllResponseHeaders();
            }
        };

    */

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
