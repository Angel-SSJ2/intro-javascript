const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número para saber su día de la semana: ", (numero) => {
    numero = parseInt(numero);
    if (numero === 1) {
    console.log("Hoy es Lunes");
} else if (numero === 2) {
    console.log("Hoy es Martes");
} else if (numero === 3) {
    console.log("Hoy es Miércoles");
} else if (numero === 4) {
    console.log("Hoy es Jueves");
} else if (numero === 5) {
    console.log("Hoy es Viernes");
} else if (numero === 6) {
    console.log("Hoy es Sábado");
} else if (numero === 7) {
    console.log("Hoy es Domingo");
} else {
    console.log("Número inválido");
}
rl.close();
});