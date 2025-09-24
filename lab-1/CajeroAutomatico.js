
function cajero(cantidadRetirar) {
    console.log('--- Ejercicio 25: Cajero Automático ---');
    
    let saldoGuardado = localStorage.getItem('saldoCuenta');
    
    let saldoActual = saldoGuardado ? parseInt(saldoGuardado) : 5000;
    
    if (cantidadRetirar <= saldoActual) {
        saldoActual -= cantidadRetirar;
        
        localStorage.setItem('saldoCuenta', saldoActual.toString());
        
        console.log(`Retiro exitoso: Q${cantidadRetirar}`);
        console.log(`Su nuevo saldo es: Q${saldoActual}`);
    } else {
        console.log("Saldo insuficiente. Su saldo actual es: Q" + saldoActual);
    }
}

const saldoInicial = localStorage.getItem('saldoCuenta') ? parseInt(localStorage.getItem('saldoCuenta')) : 5000;
console.log(`Bienvenido, su saldo actual es Q${saldoInicial}`);