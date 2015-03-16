window.onload = function () {
    "use strict";



    function updateProgressBar() {
        console.log(this.name+":"+this.value);
        var pBar = document.getElementById("progreso");
        if (this.willValidate) {
            if (valids < l) {
                valids++;
            }

        } else {
            if (valids > 0) {
                valids--;
            }

        }
        pBar.value = valids;
        console.log("Valids="+valids+", Pbar.value="+pBar.value);


    }


    var inputs = document.getElementsByTagName("input");
    var l = inputs.length;
    var pBar = document.getElementById("progreso");
    pBar.max = l - 1;
    pBar.value = 0;
    var valids = 0;




    for (var i = 0; i < l; i++) {
        var field = inputs[i];
        field.addEventListener("blur", updateProgressBar);

    }



};
