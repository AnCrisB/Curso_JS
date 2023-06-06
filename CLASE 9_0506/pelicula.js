// Crear un nuevo Map
const nombresMap = new Map ();

// Agregar nombres al Map
nombresMap.set (1, 'Juan');
nombresMap.set (2, 'Pedro');
nombresMap.set (3, 'Maria');

// nombreMap = {1: 'Juan', 2: 'Pedro', 3: 'Maria};
// Obtener el elemento de la lista HTML
const lista = document.getElementById('nombre-lista');

// Recorrer el Map y agregar los nombres a la lista HTML
for (const [id, nombre] of nombresMap) {
    /* lista.innerHTML += `<li>${value}</li>`; */
    lista.textContent = nombre;
    lista.appendChild(li);
}

// Crear una lista vacía