const numeroSecreto = Math.floor(Math.random() * 10) + 1;

const numeroJugador = parseInt(prompt("Adivina el número secreto entre 1 y 10:"));

if(numeroJugador === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número secreto.");
} else {
    alert("Lo siento, el número secreto era " + numeroSecreto + ".");
}