"use strict";

var APP = APP || {};

APP.validarMail = function validarMail() {

    //Devuelve True si el email introducido es correcto o no se ha introducido aún ningún email (para evitar que salte el alert simplemente por poner el cursor sobre el campo)

    var mailRegEx = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

    var mailValue = document.getElementById("registro_email").value;

    if (mailRegEx.test(mailValue) || mailValue.length === 0) {

        return true;

    } else {

        alert("Mail incorrecto.");

        return false;
    }

}


APP.validarPass = function validarPass() {

    //Devuelve True si el password introducido es correcto o no se ha introducido aún ningún password (para evitar que salte el alert simplemente por poner el cursor sobre el campo)

    var unaMinusRegEx = /.*[a-z].*/;

    var unaMayusRegEx = /.*[A-Z].*/;

    var passValue = document.getElementById("registro_password").value;

    var validPass = (unaMinusRegEx.test(passValue) && unaMayusRegEx.test(passValue) && passValue.length > 5);

    if (validPass || passValue.length === 0) {

        return true;

    } else {

        alert("Pass incorrecto. Debe tener un mínimo de 6 caracteres y contar con al menus una letra mayúscula y otra minúscula.");

        return false;
    }

}


APP.validarComment = function validarComment() {

    var commentValue = document.getElementById("registro_comentarios").value;

    if (commentValue.length < 50) {

        return true;

    } else {

        alert("Comentario demasiado largo (el máximo permitido son 50 caracteres).");

        return false;
    }


}


APP.checkRequeridos = function checkRequeridos(f) {


    var mailValue = document.getElementById("registro_email").value;

    var nombreValue = document.getElementById("registro_nombre").value;

    var commentValue = document.getElementById("registro_comentarios").value;


    if (mailValue.length === 0) {

        alert("Introduce un email");

        f.preventDefault();

        return false;

    } else if (nombreValue.length === 0) {

        alert("Introduce un nombre");

        f.preventDefault();

        return false;

    } else if (commentValue.length === 0) {

        alert("Introduce un comentario");

        f.preventDefault();

        return false;

    } else if (!validarTodo()) {

        f.preventDefault();

        return false;

    }

    return true;

}

function validarTodo() {

    return (APP.validarMail() && APP.validarPass() && APP.validarComment());

}
