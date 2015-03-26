document.addEventListener('deviceready',function(){
    "use strict";


    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

    var takePicture=function () {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI
    });
    };

    document.getElementById('btnFoto').addEventListener('vclick',takePicture,false);
    },false);
