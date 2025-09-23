/* FUNCIONES EN JAVASCRIPT */

// somos dueños de una empresa y necesitamos descuentos en nuestros productos
function calcularPreciosDeDescuento(precio, descuentoEnPorcentaje) {
    const descuento = (precio * descuentoEnPorcentaje) / 100;
    const nuevoPrecio = precio - descuento;
    return nuevoPrecio;
}

const precioOriginal = 1000;
const descuento = 18;
const precioFinal = calcularPreciosDeDescuento(precioOriginal, descuento);

console.log(`Precio original: Q` + precioOriginal);
console.log(`Descuento: Q` + descuento);
console.log(`Precio final con descuento: Q` + precioFinal);