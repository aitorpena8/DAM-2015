function addClass(element, className) {
    //var classAttr = document.createAttribute("class");
    //classAttr.value=className;
    element.className = className;
    //element.setAttributeNode(classAttr);
}

function removeClass(element) {
    //var classAttr = document.createAttribute("class");
    //classAttr.value=className;
    element.className = '';
    //element.setAttributeNode(classAttr);
}

function writeErrorMessages(reqNom, reqEmail, reqComm, validEmail, validComm, validPass, validChecked) {

    var msg = {

        'reqNom': 'Nombre Requerido',
        'reqEmail': 'Email Requerido',
        'reqComm': 'Comentario Requerido',
        'validEmail': 'El email introducido no es correcto',
        'validComm': 'El Comentario no puede tener mas de 50 carateres',
        'validPass': 'El pasword tiene que contener al menos un caracter numerico, una mayuscula y una minuscula',
        'validChecked': 'Tienes que aceptar las condiciones'
    };


    var list = document.getElementById("expl");
    if (list != undefined) {
        document.getElementById("registro").removeChild(list);
    }
    var list = document.createElement("ul");
    list.id = "expl";
    var item, text;
    if (!reqNom) {
        item = document.createElement("li");
        text = document.createTextNode(msg.reqNom);
        item.appendChild(text);
        list.appendChild(item);
    }

    if (!reqEmail) {
        var item = document.createElement("li");
        var text = document.createTextNode(msg.reqEmail);
        item.appendChild(text);
        list.appendChild(item);
    } else if (!validEmail) {
        var item = document.createElement("li");
        var text = document.createTextNode(msg.validEmail);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (!reqComm) {
        item = document.createElement("li");
        text = document.createTextNode(msg.reqComm);
        item.appendChild(text);
        list.appendChild(item);
    } else if (!validComm) {
        item = document.createElement("li");
        text = document.createTextNode(msg.validComm);
        item.appendChild(text);
        list.appendChild(item);
    }

    if (!validPass) {
        item = document.createElement("li");
        text = document.createTextNode(msg.validPass);
        item.appendChild(text);
        list.appendChild(item);
    }
    if (!validChecked) {
        item = document.createElement("li");
        text = document.createTextNode(msg.validChecked);
        item.appendChild(text);
        list.appendChild(item);
    }

    document.getElementById("registro").appendChild(list);


}

function validar(event) {
    //event.preventDefault();
    console.log("b");
    var nombre = document.getElementById('registro_nombre');
    var email = document.getElementById('registro_email');
    var comm = document.getElementById('registro_comentarios');
    var pass = document.getElementById('registro_password');
    var checkbox = document.getElementById('registro_password');
    var reqNom = validate_required(nombre.value);
    if (!reqNom)
        addClass(nombre, "miss");
    else
        removeClass(nombre);
    var reqEmail = validate_required(email.value);
    var validEmail = validate_email(email.value);

    if (!reqEmail || !validEmail)
        addClass(email, "miss");

    else
        removeClass(email);

    var reqComm = validate_required(comm.value);
    var validComm = validate_comment(comm.value);
    if (!reqComm || !validComm)
        addClass(comm, "miss");
    else
        removeClass(comm);
    var validPass = validate_password(pass.value);
    if (!validPass)
        addClass(pass, "miss");
    else
        removeClass(pass, "miss");

    var validChecked = validate_checked(checkbox);
    if (!validChecked)
        addClass(checkbox, "miss");
    else
        removeClass(checkbox, "miss");

    if (!reqNom || !reqEmail || !reqComm || !validEmail || !validComm || !validPass || !validChecked) {
        writeErrorMessages(reqNom, reqEmail, reqComm, validEmail, validComm, validPass, validChecked);
        return false;
    }
    return true;





}
document.body, onload = function () {
    console.log("a");
    var submit = document.querySelector("input[type=submit]");
    submit.onclick = validar;
};
