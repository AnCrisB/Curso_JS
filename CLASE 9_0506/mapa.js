// Crear un nuevo Map
const miMapa = new Map();

// Agregar elementos al Map
miMapa.set('clave1', 'valor1');
miMapa.set('clave2', 'valor2');
miMapa.set('clave3', 'valor3');

// Obtener el tamaño del Map
console.log('Tamaño del Map:', miMapa.size);

// Obtener un valor del Map
console.log('¿Existe clave3?', miMapa.has('clave3')); /* El has es para comprobar si una clave existe en el mapa */

// Recorrer el Map utilizando un bucle for...of
for (const [miClave, miValor] of miMapa) {
    console.log('miClave, miValor');
}

// Eliminar un elemento del Map
miMapa.delete('clave1'); /* Borra tanto clave, como valor */

// Vaciar el Map
miMapa.clear(); 