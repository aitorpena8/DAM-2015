var APP = APP || {};

$(document).ready(function () {
    "use strict";

    APP.net = (function () {
        console.log("net cargado");

        var serverUrl = 'php/getcards.php';


        var peticion = function (numero, func) {
            numero = (numero !== null || numero !== 0 || !isNaN(numero)) ? numero : 1;
            $.ajax({
                url: serverUrl,
                type: 'POST',
                datatType: 'json',
                data: {
                    numero: numero
                },
                success: function (json) {
                    func(json);
                },

                error: function (jqXHR, status, error) {
                    console.log('Error en la conexion con el servidor');
                }
            });
        };
        return {

            peticion: peticion

        };
    })();

});


//obeto global

//Usar "use strict"

//esperar a que el DOM este cargado

//Funcion anonima autoejecutable para realizar las peticiones AJAX, que añadiremos en el objeto global
//y expondra un metodo para poder realizar las llamadas al servidor.

//El servidor espera un parametro 'numero' con el número de elementos que tendra el JSON de respuesta.
