var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName); // Oscar

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName); // Ana

var secondName = 'David'; // declarar / asignar
var secondName = 'Ana'; // reasignar
console.log(secondName); // Ana

//Let
let fruit = 'Apple'; // declarar / asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit); // Kiwi
//let fruit = 'Banana'; // no se puede redeclarar una variable dentro del block scope


//Const
const animal = 'dog'; // declara y asigna
//animal = 'cat'; // reasignar, no se puede reasignar una constante
//const animal = 'snake'; //No se puede redeclarar y asignar una constante.
console.log(animal); // Error.

//Const, la referencia ya existe, y se pueden utilizar metodos.
const vehiculos = [];
vehiculos.push('car'); //Añadir un carro
console.log(vehiculos); //Mostrarlo
vehiculos.pop(); //Quitar el carro
console.log(vehiculos); //Mostrarlo
