const readline = require('readline'); // Falta esta línea al inicio del archivo

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número para calcular su factorial: ", (respuesta) => {
    let numero = parseInt(respuesta);
    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

    console.log(`El factorial de ${numero} es ${factorial}.`);
    rl.close();
});