// Se pide al usuario el tipo de tabla que quiere ver
let tipoTabla = prompt("¿Qué tabla de multiplicar quiere observar? Escriba 'pares' o 'impares'.");

// Usamos una estructura if...else if...else para decidir qué tablas mostrar
if (tipoTabla === 'pares') {
    console.log("Muestra las tablas de multiplicar de números pares (2, 4, 6, 8, 10):");

    // Bucle para números pares del 2 al 10
    for (let i = 2; i <= 10; i += 2) {
        console.log(`\n--- Tabla del ${i} ---`); // Título para cada tabla
        
        // Bucle interno, genera la tabla de multiplicar del número actual (del 1 al 10)
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
    }
} else if (tipoTabla === 'impares') {
    console.log("Muestra las tablas de multiplicar de números impares (1, 3, 5, 7, 9):");

    // Bucle para números impares del 1 al 9
    for (let i = 1; i <= 9; i += 2) {
        console.log(`\n--- Tabla del ${i} ---`); // Título para cada tabla
        // Bucle interno, genera la tabla de multiplicar del número actual (del 1 al 10)
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
    }
} else {
    // Si la entrada del usuario no es 'pares' ni 'impares'
    console.log("Opción no válida. Por favor, escribe 'pares' o 'impares'.");
}
