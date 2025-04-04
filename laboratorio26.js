// 1. Crear el arreglo de frutas
let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Arreglo original:", frutas);

// 2. Ordenar el arreglo alfabéticamente
frutas.sort();
console.log("Arreglo ordenado alfabéticamente:", frutas);

// 3. Función SingularAPlural
function SingularAPlural(palabra) {
    if (!palabra.endsWith('s')) {
        return palabra + 's';
    }
    return palabra;
}

// 4. Recorrer el arreglo y convertir a plural
let frutasPlural = [];
for (let fruta of frutas) {
    frutasPlural.push(SingularAPlural(fruta));
}
console.log("Arreglo en plural:", frutasPlural);

// 5. Función existeFruta
function existeFruta(fruta) {
    return frutas.includes(fruta);
}

// Probando existeFruta con "mango" y "uva"
console.log("¿Existe 'mango'?:", existeFruta('mango'));
console.log("¿Existe 'uva'?:", existeFruta('uva'));

// 6. Filtrar frutas con menos o igual a 4 letras
let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 o menos letras:", frutasCortas);

// 7. Función eliminarFruta
function eliminarFruta(fruta) {
    if (existeFruta(fruta)) {
        frutas = frutas.filter(item => item !== fruta);
        return true;
    } 
    return false;
}

// Probando eliminarFruta con "pera" y "mango"
console.log("Eliminar 'pera':", eliminarFruta('pera'));
console.log("Eliminar 'mango':", eliminarFruta('mango'));
console.log("Arreglo después de eliminar:", frutas);