function esTriangulo(num1, num2, num3) {
    console.log('--- Ejercicio 8: ¿Es un triángulo? ---');
    console.log(`Verificando los números: ${num1}, ${num2}, ${num3}`);

    if (num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1) {
        console.log("Los números pueden formar un triángulo.");
    } else {
        console.log("Los números no pueden formar un triángulo.");
    }
}