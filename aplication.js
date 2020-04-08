//Cuando necesitamos hacer uso de una fuction, en otras areas de nuestro programa, código, etc
//Lo mejor es heredar esa funcionalidad, en lugar de copear todo el código.
function Alumnos(nombre, grado){
    this.nombre= nombre;
    this.grado= grado;
 
}
//Ejemplo de prototipe
Alumnos.prototype.gradoClientenombre= function(){
    return `Nombre: ${this.nombre}, Tu grado es: ${this.grado}`;
}
const alumno1= new Alumnos('juan', 'primero');
console.log(alumno1);



//En esta otra fuction, queremos usar parametro de la fuction Alumnos, por ello heredaremos
function Escuela(nombre, grado, direccion, tipo){
Alumnos.call(this, nombre, grado);
this.direccion=direccion;
this.tipo=tipo;
} // Llamamos a la clase. metodo call y le pasamos los parametros que necesitamos

//Como heredamos un prototype, para poer usarlo en otra fuction?
Escuela.prototype= Object.create(Alumnos.prototype); //Esta linea debe ir arriba, por que si no se añadira primero la instancia y luego se añade el prototipo

const escuel= new Escuela('Benito Juares','seis', 'Mexico','Musica',); //Instnacia
console.log(escuel.gradoClientenombre());
//De esta manera podemos crear protitypes en una clase principal "Alumnos"
// e irlos heredando y la funcionalidad la podremos reutilizar, con información propia de la clase.

