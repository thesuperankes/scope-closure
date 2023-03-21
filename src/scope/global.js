var a; //Declarando
var b = 'b'; //Declaramos / asignamos
b = 'bb'; //Reasignacion
var a = 'aa'; //Redeclaracion

//Global scope
var fruit = 'Apple'; // global
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}

function countries(){
    country = 'Colombia'; //Esta variable se esta declarando de forma global.
    console.log(country);
}

countries() //Muestra colombia
console.log(country); //Tambien muestra colombia