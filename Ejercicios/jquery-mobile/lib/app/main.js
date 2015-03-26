//$(document).ready(function () {

 //   console.log("document ready"); //'pageinit'
    $(document).bind('deviceready', function () {
  "use strict";
        $('.sel').bind('vclick', function () {

            $('#selRes').html("Selected ID:" + this.id);

        });


    });
//});


