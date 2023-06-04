var contador=0
const boton = document.getElementById('button')
const resultDiv = document.getElementById('result')
boton.addEventListener('click', function() {
    resultDiv.classList.remove('hidden');

    //crea un nuevo <!-- <div class="btn-group-vertical" role="group" aria-label=" -->
    //y añade contenido
    contador+=1
     // Llamado de variables
    let inputNombre = document.getElementById("inputNombre").value
    let inputCorreo = document.getElementById("inputCorreo").value
    let inputTelefono = document.getElementById("inputTelefono").value
    let tabla = document.getElementById("tbody")
    // Crear etiquetas de la vacías para la tabla
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    // Crear nodo de tipo text
    let counter = document.createTextNode(contador)
    let name = document.createTextNode(inputNombre)
    let email = document.createTextNode(inputCorreo)
    let num = document.createTextNode(inputTelefono)

    tr.setAttribute("id", contador)

    let filaUltima=document.getElementById("ultima")

    td1.appendChild(counter)
    td2.appendChild(name)
    td3.appendChild(email)
    td4.appendChild(num)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tabla.appendChild(tr)
});

const eliminar = document.getElementById('eliminar');
eliminar.addEventListener('click', function(){
    let idEliminar= document.getElementById('idEliminar').value;
    let tabla =document.getElementById(idEliminar)
    tabla.parentNode.removeChild(tabla)
    document.getElementById('idEliminar').value= "";
})
