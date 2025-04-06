
const opciones = ['PIEDRA', 'PAPEL', 'TIJERA'];


let jugar = true;

while (jugar) {
    
    let opcionUsuario = prompt('Elige: PIEDRA, PAPEL o TIJERA (o escribe "SALIR" para terminar)').toUpperCase();

    
    if (opcionUsuario === 'SALIR') {
        console.log('¡Gracias por jugar!');
        jugar = false; // Se rompe el bucle
        break;
    }

    
    if (!opciones.includes(opcionUsuario)) {
        console.log('Opción no válida. Por favor, elige PIEDRA, PAPEL o TIJERA.');
        continue;
    }


    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    
    console.log(`Usuario eligió: ${opcionUsuario}`);
    console.log(`Computadora eligió: ${opcionComputadora}`);

    
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