"use strict";

var APP = APP || {};

window.addEventListener("load", setListeners, false);


function setListeners() {

    document.getElementById("registro_email").addEventListener("focusout", APP.validarMail, false);

    document.getElementById("registro_password").addEventListener("focusout", APP.validarPass, false);

    document.getElementById("registro_comentarios").addEventListener("focusout", APP.validarComment, false);

    document.getElementById("registro").addEventListener("submit", APP.checkRequeridos, false);

}
