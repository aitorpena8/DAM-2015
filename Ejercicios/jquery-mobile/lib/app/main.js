//$(document).ready(function () {

 //   console.log("document ready");
    $(document).bind('pageinit', function () {
  "use strict";
        $('.sel').bind('vclick', function () {
            $('#selRes').html("Selected ID:" + this.id);

        });


    });
//});
