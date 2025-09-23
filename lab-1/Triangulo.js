const readline = require('readline'); // Falta esta línea al inicio del archivo

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Ingrese tres números para saber si podrían formar un triángulo, ej. num1 y num2 = Lado, num3 = Base");

rl.question("Ingrese el primer número: ", (respuesta) => {
    let num1 = parseInt(respuesta);
    
    rl.question("Ingrese el segundo número: ", (respuesta) => {
        let num2 = parseInt(respuesta);
        
        rl.question("Ingrese el tercer número: ", (respuesta) => {
            let num3 = parseInt(respuesta);
            
            // Desigualdad triangular: la suma de dos lados debe ser mayor al tercero
            if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
                console.log("Los números pueden formar un triángulo.");
            } else {
                console.log("Los números no pueden formar un triángulo.");
            }
            
            rl.close();
        });
    });
});