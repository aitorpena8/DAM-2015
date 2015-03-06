var date = "Nací el 05/04/1982 en Donostia";

function checkDate(date) {
    var pat = /\d\d\/\d\d\/\d{4}/;
    console.log("Str: " + date + ", Patr:" + pat + ", Res:" + pat.test(date));
}


function checkEmail(email) {
    var pat = /^[\w.-]+@\w+\.[a-zA-Z]{2,3}/;
    console.log("Str: " + email + ", Patr:" + pat + ", Res:" + pat.test(email));
}

var emailT = "aitorpena@gmail.com";
var emailF = "a.com";
var emailF1 = "2323.net";

console.log("

        Str: " + emailT + ", Patr: " + patEmail + ", Res: " + patEmail.test(emailT));
        console.log("Str: " + emailF + ", Patr:" + patEmail + ", Res:" + patEmail.test(emailF)); console.log("Str: " + emailF1 + ", Patr:" + patEmail + ", Res:" + patEmail.test(emailF1));





        function escapeHTML(text) {
            var character = {
                '&': '&amp;',
                '"': '&quot;',
                '>': '&lt;',
                '<': '&gt;',
            };
            var res = text.replace(/[&"><]/g, function (c) {
                console.log("subfunction" + character[c]);
                return character[c];
            });
            return res;

        }


        var str = 'Ella&El: Su edad es ">" que la de ella';


        console.log("Str: " + str + ", escapHTML Res:" + escapeHTML(str));


        var patNom = /([a-zA-z]+)\s*([a-zA-z]+)/g;
        var nom = "John Smith";
        var arr = patNom.exec(nom); console.log(arr[2] + ", " + arr[1]);


        var exp = /<script\w*?>.*?<\/script>\w*/ig;
        var str = "Lorem ipsummdsfssssssssssssssssssssssssssssssssssssss <script>codigo maliciso</script>"; console.log("Str: " + str + ", Patr:" + patNom + ", Res:" + str.replace);

        //console.log("Str: " + nom + ", Patr:" + patNom + ", Res:" + patNom.test(nom));

        //var patScript=/<script>?*/;
