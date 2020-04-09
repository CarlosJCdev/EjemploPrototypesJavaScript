//Funcion Object create
//Clase
const Cliente = {
    //Métodos o prototipes 
    imprimirSaldo: function () {
        return `Hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function (retiro) {
        return this.saldo -= retiro;
    }
}
// Creacion de un objeto
const juan = Object.create(Cliente);
juan.nombre = 'Juan';
juan.saldo = 1000;

//Realizamos un retiro instanciando al objeto y llamando al método
juan.retirarSaldo(500);

console.log(juan.imprimirSaldo());

//Desarrollado en base a la estructura de ES5 considerada la programación a objetos
