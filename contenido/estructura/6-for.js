/*

    FOR CICLO PARA

*/

//for | for-of | for-in

let lista =["eat","sleep","code","repeat"];

//for tradicional
for(let i=0; i<lista.length; i++){
    console.log(lista[i]);
}

//for of [{()}]
let canasta = ["manzanas","peras","uvas","bananas"];

for(const fruta of canasta){
    console.log(fruta);
}

//for in {objeto}

const listadecompras = {
    nombre:"manzanas",
    costo: 2.3,
    cantidad: 4,
    marca: "del monte"
};

console.log("--------------");
for(fruta in listadecompras){
    console.log(fruta);
}

console.log("--------------");
for(fruta of listadecompras){
    console.log(fruta);
}