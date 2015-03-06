function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.obtDetalles = function () {
        console.log("Nombre: " + this.nombre + ", Edad:" + this.edad + ", Genero:" + this.genero);
    };


}

function Estudiante(nombre, edad, genero, curso, grupo) {
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
    this.registrar = function () {
        console.log("Registrado: Curso: " + this.curso + ", Grupo:" + this.grupo);
    };
}
Estudiante.prototype = new Persona();


function Profesor(nombre, edad, genero, asignatura, nivel) {
    this.base = Persona;
    this.base(nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
    this.asignar = function () {
        console.log("Asignar: Asignatura: " + this.asignatura + ", Grupo:" + this.nivel);
    };
}
Profesor.prototype = new Persona();


var per1 = new Persona("aitor", 31, "M");
per1.obtDetalles();
var es1 = new Estudiante("Patxi", 21, "M", 2, 1);
es1.obtDetalles();
es1.registrar();
var pro1 = new Profesor("Leire", 31, "F", "mate", 1);
pro1.obtDetalles();
pro1.asignar();
