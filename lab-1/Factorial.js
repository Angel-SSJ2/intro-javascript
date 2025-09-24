function factorial(numero) {
    console.log('--- Ejercicio 13: Factorial ---');
    
    if (numero < 0) {
        console.log("El factorial no está definido para números negativos.");
        return;
    }

    if (numero === 0) {
        console.log(`El factorial de ${numero} es 1.`);
        return;
    }

    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    console.log(`El factorial de ${numero} es ${resultado}.`);
}