window.onload = function () {
    "use strict";
    function getLocalTime() {

        var date = new Date();
        var local = document.getElementById("horaLocal");
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        h = h > 9 ? h : "0" + h;
        m = m > 9 ? m : "0" + m;
        s = s > 9 ? s : "0" + s;
        var time = h + ":" + m + ":" + s;
        local.innerHTML = time;

    }
    getLocalTime();
};
