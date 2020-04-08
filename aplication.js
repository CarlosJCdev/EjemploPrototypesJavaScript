//En un entorno de clientes podriamos tener muchos clientes
//con la misma estrucutra defina, pero con información diferente
//es la ventaja de los objetos.
//Todos los objetos en javascrip  heredan sus funciones de un 
//Proto

//Un prototipe, nos ayuda a hacer mas legible y menos cargadas
//de codigo y mas organizado nuestras funciones.
//Tambien nos permite usar esas funciones, en otras partes
//de código.


function Alumnos(nombre, grado, calificaciones){
    this.nombre= nombre;
    this.grado= grado;
    this.calificaciones= calificaciones;
}
//Ejemplo de prototipe
//Nombre-Clase. prototype. NombreFuncion
Alumnos.prototype.tipoEstudiante= function(){
    //La función de tipoEstudiante, soló esta disponible para objetos de la clase Almunos
    let tipo;
    if(this.calificaciones >9){
        tipo= 'Excelente';
    }else if(this.calificaciones >7){
        tipo='Regular';
    }else{
        tipo='Bajo';
    }
    return tipo;
}
//Segundo prototipo que imprime grado y nombre
Alumnos.prototype.gradoClientenombre= function(){
    return `Nombre: ${this.nombre}, Tu grado es: ${this.grado},
    Tu calificación es: ${this.calificaciones}`;
}

//Tercer prototipo que modifica la calificacion del alumno
Alumnos.prototype.modificarCalificacion= function(modificacion){
    return this.calificaciones -= modificacion;
}


const alumno1= new Alumnos('juan', 'tercero', 9);
const alumno2= new Alumnos('carlos', 'quinto', 8);
const alumno3= new Alumnos('mendoza', 'primero', 7);

alumno2.modificarCalificacion(2);

console.log(alumno1.tipoEstudiante());
console.log(alumno1.gradoClientenombre());
console.log(alumno2.gradoClientenombre());
console.log(alumno3.gradoClientenombre());
