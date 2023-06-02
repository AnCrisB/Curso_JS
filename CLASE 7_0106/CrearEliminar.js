function agregar() {
    // Crear nodo de tipo Element
    let parrafo = document.createElement("p");
    // Crear nodo de tipo text
    let contenido = document.createTextNode("Hola!");
    // añadir el nodo Text como hijo del nodo tipo element
    parrafo.appendChild(contenido);
    // añadir el nodo element como hijo de la pagina
    document.body.appendChild(parrafo);

    // para agregar a un elemento ya existente
    let contenedor = document.querySelector("#primerDiv");
    contenedor.appendChild(parrafo);
}

function eliminar() {
    // para eliminar un elemento
    let elim = document.querySelector("p");
    elim.parentNode.removeChild(elim);
}


