$(document).ready(function () {
    "use strict";
    var dragSrcEl = null;

    function handleDragStart() {
        console.log("dragStart");
        dragSrcEl = this;
        $(this).addClass("dragging");


    }


    function handleDragEnd() {
        console.log("dragEnd");
        $(this).removeClass("dragging");


    }

    function handleDragEnter(event) {
        console.log("dragEnter");
        $(this).addClass("ilumine");

    }

    function handleDragLeave(event) {
        console.log("dragLeave");
        $(this).removeClass("ilumine");


    }



    function handleDragOver(event) {
        console.log("dragOver");




    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Drop");
        this.innerHTML = e.dataTransfer.getData('text/html');
        return false;


    }
    $('.cont_products .product').each(function () {
        $(this).on('dragstart', handleDragStart);
        $(this).on('dragend', handleDragEnd);



    });


    $('#drop').on('dragenter', handleDragEnter);
    $('#drop').on('dragleave', handleDragLeave);
    $('#drop').on('drop', handleDrop);




});
