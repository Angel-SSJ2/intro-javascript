
function diaDeLaSemana(num) {
    const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    if (num >= 1 && num <= 7) {
        return dias[num - 1]; 
    } else {
        return "Número inválido";
    }
}

console.log('Ejercicio 6: Día de la semana');

const numeroDelUsuario = prompt('Ingresa un número del 1 al 7:');

const numeroInt = parseInt(numeroDelUsuario);

const dia = diaDeLaSemana(numeroInt);

console.log('El número ingresado fue:', numeroInt);
console.log('El día de la semana es:', dia);