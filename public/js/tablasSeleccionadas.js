
// Pedimos al usuario qué tipo de tablas quiere ver
let tipoTabla = prompt("¿Quieres ver las tablas de multiplicar de números PARES o IMPARES entre 1 y 10? Escribe 'pares' o 'impares'.");

// Convertimos la entrada a minúsculas para que no importe si escribe 'Pares', 'PARES' o 'pares'
tipoTabla = tipoTabla.toLowerCase();

// Usamos una estructura if...else if...else para decidir qué tablas mostrar
if (tipoTabla === 'pares') {
    console.log("Mostrando tablas de multiplicar de números PARES (2, 4, 6, 8, 10):");
    // Bucle para números pares del 2 al 10
    for (let i = 2; i <= 10; i += 2) {
        console.log(`\n--- Tabla del ${i} ---`); // Título para cada tabla
        // Bucle interno para generar la tabla de multiplicar del número actual (del 1 al 12)
        for (let j = 1; j <= 12; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
    }
} else if (tipoTabla === 'impares') {
    console.log("Mostrando tablas de multiplicar de números IMPARES (1, 3, 5, 7, 9):");
    // Bucle para números impares del 1 al 9
    for (let i = 1; i <= 9; i += 2) {
        console.log(`\n--- Tabla del ${i} ---`); // Título para cada tabla
        // Bucle interno para generar la tabla de multiplicar del número actual (del 1 al 12)
        for (let j = 1; j <= 12; j++) {
            let resultado = i * j;
            console.log(`${i} x ${j} = ${resultado}`);
        }
    }
} else {
    // Si la entrada del usuario no es 'pares' ni 'impares'
    console.log("Opción no válida. Por favor, escribe 'pares' o 'impares'.");
}