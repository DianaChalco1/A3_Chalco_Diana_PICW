let edad = prompt("¿Cuántos años tienes?");

// Convertimos la entrada a número
edad = Number(edad);

// Verificamos si es un número válido
if (isNaN(edad)) {
    console.log("Por favor, ingrese un número válido.");
} else if (edad < 0) {
    console.log("Edad no válida");
} else if (edad > 0 && edad <= 12) {
    console.log("Niño");
} else if (edad > 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad <= 59) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}

