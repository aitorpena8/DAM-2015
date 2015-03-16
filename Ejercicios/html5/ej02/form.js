window.onload = function () {
    "use strict";

    function countValids() {
        var count = 0;
        for (var f in valids) {

                   // console.log(f + ":" + f.valid);

            if (valids[f]) {
                count++;
            }
        }
        return count;

    }

    function updateProgressBar() {

        var pBar = document.getElementById("progreso");

        valids[this.name] = this.checkValidity();
        console.log(this.name + ":" + this.checkValidity());


        pBar.value = countValids();
        console.log("pBar.value=" + pBar.value);


    }


    var inputs = document.getElementsByTagName("input");
    var l = inputs.length;
    var pBar = document.getElementById("progreso");
    pBar.max = l - 1;
    pBar.value = 0;
    var valids = {};




    for (var i = 0; i < l; i++) {
        var field = inputs[i];
        if (field.type !== "submit") {
            field.addEventListener("blur", updateProgressBar);
            valids[field.name] = false;
        }

    }



};
