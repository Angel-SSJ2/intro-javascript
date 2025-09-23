const readline = require('readline'); // Falta esta línea al inicio del archivo

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número para mostrar su tabla de multiplicar: ", (respuesta) => {
    let numero = parseInt(respuesta);

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    rl.close();
});
