function showRequired(el, validate_func) {
    var res=validate_func(el.value);

    if (!res) {
        var classAttr = document.createAttribute("className");
        var req = document.createTextNode("required");
        classAttr.appendChild(req);
        el.appendChild(classAttr);
    }
    return res;
}

function validar() {
    var nombre = document.getElementById('registro_nombre');
    var email = document.getElementById('registro_email').value;
    var coment = document.getElementById('registro_email').value;
    var password = document.getElementById('registro_password').value;
    var reqNom=showRequired(nombre,validate_required);
    var reqEmail=showRequired(email,validate_required);
    var reqCom=showRequired(comment,validate_required);
    var validEmail=showRequired(email,validate_email);
    var validComment=showRequired(coment,validate_comment);
    var validPassword=showRequired(password,validate_password);
    if(!reqNom||!reqEmail||!reqCom||!validEmail||!validComment||!validPassword)
        return false;
    return true;





}
