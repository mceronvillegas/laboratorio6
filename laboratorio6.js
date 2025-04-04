// 1. Crear el array de opciones
const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];

// 2. Iniciar el juego en un bucle while
let jugar = true;

while (jugar) {
    // 3. Pedir al usuario que elija una opción
    let opcionUsuario = prompt('Elige: PIEDRA, PAPEL o TIJERA (o escribe "SALIR" para terminar)').toUpperCase();

    // 4. Permitir al usuario salir del juego
    if (opcionUsuario === 'SALIR') {
        console.log('¡Gracias por jugar!');
        jugar = false; // Se rompe el bucle
        break;
    }

    // 5. Validar entrada del usuario
    if (!opciones.includes(opcionUsuario)) {
        console.log('Opción no válida. Por favor, elige PIEDRA, PAPEL o TIJERA.');
        continue;
    }

    // 6. Elegir aleatoriamente la opción de la computadora
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    // 7. Mostrar las elecciones por consola
    console.log(`Usuario eligió: ${opcionUsuario}`);
    console.log(`Computadora eligió: ${opcionComputadora}`);

    // 8. Determinar el ganador
    if (opcionUsuario === opcionComputadora) {
        console.log('¡Empate!');
    } else if (
        (opcionUsuario === 'PIEDRA' && opcionComputadora === 'TIJERA') ||
        (opcionUsuario === 'PAPEL' && opcionComputadora === 'PIEDRA') ||
        (opcionUsuario === 'TIJERA' && opcionComputadora === 'PAPEL')
    ) {
        console.log('¡Ganaste!');
    } else {
        console.log('¡Perdiste!');
    }
}