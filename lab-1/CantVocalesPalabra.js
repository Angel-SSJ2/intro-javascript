function contarVocales(palabra) {
    console.log('--- Ejercicio 26: Contar vocales ---');
    
    const palabraMinusculas = palabra.toLowerCase();
    
    const vocalesEncontradas = palabraMinusculas.match(/[aeiou]/g);

    const numVocales = vocalesEncontradas ? vocalesEncontradas.length : 0;
    
    console.log(`La palabra "${palabra}" tiene ${numVocales} vocales.`);
}