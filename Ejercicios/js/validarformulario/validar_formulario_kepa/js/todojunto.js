"use strict";

window.addEventListener("load", setListeners, false);


function setListeners() {

    document.getElementById("registro_email").addEventListener("focusout", validarMail, false);

    document.getElementById("registro_password").addEventListener("focusout", validarPass, false);

    document.getElementById("registro_comentarios").addEventListener("focusout", validarComment, false);

    document.getElementById("registro").addEventListener("submit", checkRequeridos, false);

}

function validarTodo() {

    return (validarMail() && validarPass() && validarComment());

}

function validarMail() {

    //Devuelve True si el email introducido es correcto o no se ha introducido aún ningún email (para evitar que salte el alert simplemente por poner el cursor sobre el campo)

    mailRegEx = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

    mailValue = document.getElementById("registro_email").value;

    if (mailRegEx.test(mailValue) || mailValue.length === 0) {

        return true;

    } else {

        alert("Mail incorrecto.");

        return false;
    }

}


function validarPass() {

    //Devuelve True si el password introducido es correcto o no se ha introducido aún ningún password (para evitar que salte el alert simplemente por poner el cursor sobre el campo)

    unaMinusRegEx = /.*[a-z].*/;

    unaMayusRegEx = /.*[A-Z].*/;

    passValue = document.getElementById("registro_password").value;

    var validPass = (unaMinusRegEx.test(passValue) && unaMayusRegEx.test(passValue) && passValue.length > 5);

    if (validPass || passValue.length === 0) {

        return true;

    } else {

        alert("Pass incorrecto. Debe tener un mínimo de 6 caracteres y contar con al menus una letra mayúscula y otra minúscula.");

        return false;
    }

}


function validarComment() {

    commentValue = document.getElementById("registro_comentarios").value;

    if (commentValue.length < 50) {

        return true;

    } else {

        alert("Comentario demasiado largo (el máximo permitido son 50 caracteres).");

        return false;
    }


}


function checkRequeridos(f) {


    mailValue = document.getElementById("registro_email").value;

    nombreValue = document.getElementById("registro_nombre").value;

    commentValue = document.getElementById("registro_comentarios").value;


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
