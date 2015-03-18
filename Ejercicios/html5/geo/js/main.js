$(document).ready(function () {
    // Calcular posición

    function showMap() {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Usted está aquí!"
        });
    }


    var print = function printPosition(res) {
        position = res;
        var coords = position.coords;
        $('#status').html("Lat:" + coords.latitude + ", Lon:" + coords.longitude + ", Acc:" + coords.accuracy);
        showMap();
    }

    var error = function printError(res) {
        $('#status').html("Error al encontrar la poisición");

    }
    var position;

    function askForCoordenates() {
        if (navigator.geolocation) {
            var opts = {
                enableHighAccuracy: true,
                timeout: 2000,
                maximumAge: 0
            };

            navigator.geolocation.getCurrentPosition(print, error,opts);
        }


    }
    askForCoordenates();




});
