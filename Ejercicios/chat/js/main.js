$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false; // Obtener los elementos del DOM

    function sendMsg(e) {
        var event = e.originalEvent;
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            if (!myName) {
                myName = $("#input").val();
                socket.send(myName);

            } else {
                var txt = $("#input").val();
                socket.send(myName, txt, myColor, new Date());
            }

            $("#input").val("");
        }


    }

    function connected() {
        $("#status").text("Connected");
        $("#input").removeAttr("disabled");
        socket.addEventListener("message", listenServer, false);
        //  console.log ($("#input"));
        $("#input").on("keyup", sendMsg);

    }



    function listenServer(e) {
        // $("#content").text(e.data);
        var data = JSON.parse(e.data);
        console.log(e.data);
        if (data.type == "color") {
            myColor = res.data;
            console.log(myColor);

            if (data.type == "history") {
                for (var i in res.data) {
                    var msg = res.data[i];
                    if (msg.author && msg.text && msg.color && msg.time) {
                        addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
                    }
                }
            }

            if (data.type == "message") {
                var msg = res.data
                addMessage(msg.author, msg.text, msg.color, new Date(msg.time));
            }
        }
    }





}


function disconected() {
    $("#status").text("Disconected");
    $("#input").attr("disabled");



}



// Comprobar la disponibilidad de Web Socket en el navegador
if (!Modernizr.websockets) {
    return false;
}

window.WebSocket = window.WebSocket || window.MozWebSocket
var url = "ws://10.70.1.111:1337";
var socket = new window.WebSocket(url); $(socket).on("open", connected); $(socket).on("close", disconected);



//socket.send("aitorpena");
//socket.addEventListener("message", listenServer, false);

// Abrir la conexion con ws://10.70.1.111:1337
// 1. Al abrir la conexión, solicitar el nick.
// 2. Controlar posibles errores del servidor.
// 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
// 4. La estructura del objeto enviado por el servidor es la siguiente:
//      {
//          // Contiene el tipo de mensaje recibido
//          type : @string in ['color', 'history', 'message'],
//          // Contiene los datos según el tipo de mensaje recibido
//          data: @Object {author, text, color, time}
//      }
// 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

/**
 * Añadir el mensaje a la ventana de chat
 */





function addMessage(author, message, color, dt) {
    $("#content").prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ': ' + message + '</p>');
}
});
