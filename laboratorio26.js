
let frutas = ['manzana', 'banano', 'uva', 'pera', 'sandia', 'kiwi', 'naranja'];
console.log("Arreglo original:", frutas);


frutas.sort();
console.log("Arreglo ordenado alfabéticamente:", frutas);


function SingularAPlural(palabra) {
    if (!palabra.endsWith('s')) {
        return palabra + 's';
    }
    return palabra;
}


let frutasPlural = [];
for (let fruta of frutas) {
    frutasPlural.push(SingularAPlural(fruta));
}
console.log("Arreglo en plural:", frutasPlural);


function existeFruta(fruta) {
    return frutas.includes(fruta);
}


console.log("¿Existe 'mango'?:", existeFruta('mango'));
console.log("¿Existe 'uva'?:", existeFruta('uva'));


let frutasCortas = frutas.filter(fruta => fruta.length <= 4);
console.log("Frutas con 4 o menos letras:", frutasCortas);


function eliminarFruta(fruta) {
    if (existeFruta(fruta)) {
        frutas = frutas.filter(item => item !== fruta);
        return true;
    } 
    return false;
}


console.log("Eliminar 'pera':", eliminarFruta('pera'));
console.log("Eliminar 'mango':", eliminarFruta('mango'));
console.log("Arreglo después de eliminar:", frutas);