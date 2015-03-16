window.onload = function () {
    "use strict";
    console.log("Placeholder?"+Modernizr.placeholder);
    Modernizr.load([{
        test: Modernizr.placeholder,
        nope: 'vendor/placeholders.min.js'
    }]);
}
