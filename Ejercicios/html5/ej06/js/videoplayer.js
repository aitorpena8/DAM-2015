window.onload = function () {
    "use strict";
    console.log("a");



    function setProgressBar() {

        video.addEventListener("timeupdate", updateProgressBar, false);


    }

    function changeVideo(){
        video.src='rsrc/dragoibola.mp4';
        video.play();
        progreso.value=0;

    }

    function updateProgressBar() {
     //   console.log("updateProgressBar: " + video.currentTime + ", progreso:" + progreso.value);
        if (video.duration) {
            var newValue = video.currentTime * progreso.max / video.duration;
       //     console.log("progreso: " + newValue);
            progreso.value = newValue;
        }
    }

    function videoControlListener() {
        switch (this.id) {
        case "iniciar":
            video.play();
            break;

        case "pausar":
            video.pause();
            break;
        case "parar":
            video.pause();
            video.currentTime = 0;
            break;
        case "avanzar":

            video.currentTime += 10;
            break;

        case "inicio":

            video.currentTime = 0;
            break;

        case "fin":

            video.currentTime = video.duration;
            break;

        case "retroceder":

            video.currentTime -= 10;
            break;

        case "pcompleta":

            if (video.requestFullScreen) {
                video.requestFullScreen();
            } else if (video.mozRequestFullScreen) {
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullScreen) {
                video.webkitRequestFullScreen();
            }
            break;

        case "volumen":
            var newVolume = this.value / this.max;
            console.log("volume: " + newVolume);
            video.volume = newVolume;
            break;


        default:
            console.log("unknwon button");

        }
    }
    var video = document.getElementById("video1");
    video.addEventListener("loadeddata", setProgressBar, false);
    video.addEventListener("ended", changeVideo, false);
    video.load();
    var progreso = document.getElementById("progreso");



    var inputs = document.getElementsByTagName("input");
    for (var i in inputs) {
        console.log(inputs[i]);
        if (inputs[i].type === "button" || inputs[i].type === "button") {
            inputs[i].addEventListener("click", videoControlListener, false);
        }
        if (inputs[i].type == "range") {
            inputs[i].addEventListener("change", videoControlListener, false);
        }

    }
};
