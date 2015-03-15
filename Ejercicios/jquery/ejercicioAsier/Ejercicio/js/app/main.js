//obeto global.

//Usar "use strict".

//esperar a que el DOM este cargado.

var APP = APP || {};

$(document).ready(function () {
    "use strict";
    var fila;
    var col;


    var timer = 0;
    var imgPintadas = 0;
    var imgEliminadas = 0;
    var interval;
    var imgNum;


    function eliminarImg() {

        console.log(this);
        var $im = $(this);
        var $card = $im.parent();
        var $container = $card.parent();
        $card.remove();
        var time = new Date();
        var outStr = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + '] ' + $im.data('name') + '. El  ' + $im.data('animal') + ' ' + $im.data('color') + ' ha sido eliminado';
        var $p = $('<p/>', {
            html: outStr
        });
        $container = $('#eliminados');
        if (imgEliminadas === 0)
            $container.show();
        $('#eliminados').append($p);
        imgEliminadas++;
    }

    function check() {
        var listaImgs = $('img');
        var l = listaImgs.length;
        for (var i = 0; i < l; i++) {
            var $im = $(listaImgs[i]);
            var c = $im.data('time');
            //var c = im.attr('data-time');
            if (c == timer) {
                var co = $im.data('color');
                if (!$im.hasClass('color')) {
                    $im.addClass(co);
                    $im.on('click', eliminarImg);
                    imgPintadas++;
            }

            }
        }
        timer++;
        if (imgPintadas == imgNum) {
            clearInterval(interval);
        }

    }


    var pintarRespuesta = (function (data) {
        console.log("pintarRespuesta");
        console.log("JSON:" + data);

        var imgWidth = 100 / col;
        console.log('imgWidth: ' + imgWidth);
        $('#botones').hide();

        var $contenedor = $('#contenedor');
        var arr = JSON.parse(data);
        imgNum = arr.length;
        interval = setInterval(check, 1000);
        for (var i = 0; i < imgNum; i++) {

            var item = arr[i];
            var $card = $('<card/>', {
                width: imgWidth + '%',
            });


            var $img = $('<img/>', {
                src: 'img/' + item.animal + '.png',
                width: imgWidth + '%',
                'data-time': item.timer,
                'data-color': item.color,
                'data-animal': item.animal,
                'data-name': item.nombre
            });

            $card.append($img);
            $contenedor.append($card);

        }
        $contenedor.show();
    });


    $('#carga').on('click', function () {

        fila = $('#filas').val();
        col = $('#columnas').val();
        console.log("fila: " + fila + ", columna: " + col);
        var numero = fila * col;
        APP.net.peticion(numero, pintarRespuesta);
    });






});


// Iniciaremos las variables privadas que sean necesarias.

// Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
// Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).

// Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.

// Necesitaremos añadir los eventos necesarios en el momento adecuado.

// Necesitaremos las funciones de callback para los eventos.

// Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

// Necesitaremos una funcion que controle el final del juego.

// Necesitaremos una funcion que controle la lista de eliminados.

// Cualquier otra funcion que sea necesaria.
