/*
*TIPOS DE DATOS: 1.Primitivos 2.Complejos(10 tipos)
*/

//1.Primitivos
//- String
let nombre = "Angel"
//- Number
let edad = 25
//- Boolean
let esMayordeEdad = true
//- Null
let noHayValor = null
//- Undefined
let noDefinido;
//- Symbol
let idUnico = Symbol("id");
//- BigInt
let numeroGrande = 2n;
//console.log(numeroGrande);

//2.Complejos
//- Object
let persona = {
    nombre: "Angel",
    edad: 25,
    esEstudiante: true
};
//- Array
let numeros = [1, 2, 3, 4, 5];
//- Function
function saludar() {
    console.log("Hola");
}
//- function
function sumar(a, b) {
    return a + b;
}
//- Date
let fecha = new Date();
//- RegExp
let patron = /[a-z]/;
//- Map
let mapa = new Map();
//- Set
let conjunto = new Set();
//- WeakMap
let weakMapa = new WeakMap();
//- WeakSet
let weakConjunto = new WeakSet();
//- Buffer
let buffer = new ArrayBuffer(16);