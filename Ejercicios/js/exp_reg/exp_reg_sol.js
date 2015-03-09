var test = (function() {
    "use strict"; //Estricto programar correctamente, p.ej: no permite usar variables antes de definir

    //function test() {

    var fecha = /(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/(\d{4})/;

//    console.log(fecha.test("Naci el 05/04/1982 en Donostia."));
//    console.log(fecha.test("Naci el 99/04/1982 en Donostia."));
//    console.log(fecha.test("Naci el 32/04/1982 en Donostia."));
//    console.log(fecha.test("Naci el 21/44/1982 en Donostia."));

    console.log("NacÃ­ el 05/04/1982 en Donostia.");
    //console.log("NacÃ­ el 05/04/1982 en Donostia.".match(fecha));
    console.log(fecha.test("NacÃ­ el 05/04/1982 en Donostia."));

    var mail = /^(\w+)((\.|-|_)(\w+))*@(\w+)(\.\w{2,})+$/;

    console.log("mimail@dominio.com");
    console.log(mail.test("mimail@dominio.com"));

    var namesRegEx = /([a-zA-Z]+)\s([a-zA-Z]+)/;

    var fullName = "John Smith";

    var namesRev = "";
    var names = fullName.split(namesRegEx);
    namesRev = names[2] + ", " + names[1];
    console.log(namesRev);


    var delScriptTag = /<script\w*?>.*?(<script\w*?>.*?<\/script>\w*?)*<\/script>\w*?/g;

    var scriptblock = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<script> codigo malicioso </script> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<script> codigo malicioso </script> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

   console.log(scriptblock.replace(delScriptTag,""));


})();
