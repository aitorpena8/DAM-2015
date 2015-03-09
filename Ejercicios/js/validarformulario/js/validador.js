function validate_required(value) {
    if (value == undefined || value == null || value.length == 0 || /^\s+$/.test(value))
        return false;
    return true;
}

function validate_email(email) {
    if (/^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/.test(email))
        return true;
    return false;
}

function validate_password(password) {
    var hasNumb = false;
    var hasUpper = false;
    var hasLower = false;
    for (var i=0; i < password.length; i++) {
        var c = password[i];
        if (!isNaN(c))
            hasNumb = true;
        if (c == c.toUpperCase())
            hasUpper = true;
        if (c == c.toLowerCase())
            hasLower = true;

        if (hasLower && hasUpper && hasNumb)
            return true;
    }
    return false;
}


function validate_comment(comment) {
    if (comment.length > 50)
        return false;
    return true;
}
