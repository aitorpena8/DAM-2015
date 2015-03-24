$(document).ready(function () {
    "use strict";
    var dragSrcEl = null;

    function handleDragStart(e) {

        console.log("dragStart");
        dragSrcEl = $(this).parent().html();
        e.originalEvent.dataTransfer.effectAllowed = 'move';
        e.originalEvent.dataTransfer.setData('html', dragSrcEl);
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

    function allowDrop(e) {
        e.preventDefault();


    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log("Drop");
        var html = e.originalEvent.dataTransfer.getData('html');
        console.log(html);
        this.innerHTML+=html;
        return false;


    }
    $('.cont_products .product').each(function () {
        $(this).on('dragstart', handleDragStart);
        $(this).on('dragend', handleDragEnd);



    });


    $('#drop').on('dragenter', handleDragEnter);
    $('#drop').on('dragleave', handleDragLeave);
    $('#drop').on('dragover', allowDrop);

    $('#drop').on('drop', handleDrop);




});
