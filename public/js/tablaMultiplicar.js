
let numero = prompt("Ingrese un número la tabla de multiplicar:");

//Con parseInt se convierte la entrada a un número
numero = parseInt(numero); 

//Con isNaN se verifica si la entrada es un número válido
if (isNaN(numero)) { 

// se imprime el mensaje dentro del paréntesis en la consola
    console.log("Por favor, ingresa un número válido.");

//una vez que se ha confirmado que ha ingresado un número válido
} else {
    console.log(`Tabla de multiplicar del ${numero}:`);

    //Usar un bucle for para iterar del 1 al 12
    for (let i = 1; i <= 12; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }

}