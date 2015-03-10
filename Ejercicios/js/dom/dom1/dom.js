var links = document.getElementsByTagName("a");
var linksNumb = links.length;
var outString = "Número de enlances: " + linksNumb;
var p = document.createElement("p");
var textNode = document.createTextNode(outString);
p.appendChild(textNode);
document.body.appendChild(p);


var link = links[linksNumb - 2];
var outString = "Dirección penúltimo enlace: " + link.href;
var p = document.createElement("p");
var textNode = document.createTextNode(outString);
p.appendChild(textNode);
document.body.appendChild(p);

var sComp = 'http://prueba/';
var sComp1 = 'http://prueba';

var cont = 0;
for (var i in links) {
    if (links[i].href == sComp || links[i].href == sComp1)
        cont++;
}


var outString = "Número de enlaces a "+sComp+": " + cont;
var p = document.createElement("p");
var textNode = document.createTextNode(outString);
p.appendChild(textNode);
document.body.appendChild(p);


var paragraphs = document.getElementsByTagName("p");

var paragraph = paragraphs[2];
var links3p = paragraph.getElementsByTagName("a");

var outString = "Número de enlaces del 3. parrafo: " + links3p.length;
var p = document.createElement("p");
var textNode = document.createTextNode(outString);
p.appendChild(textNode);
document.body.appendChild(p);
