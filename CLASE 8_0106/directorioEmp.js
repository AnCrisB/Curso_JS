var contador=0;
function agregarElemento () {
    //crea un nuevo <!-- <div class="btn-group-vertical" role="group" aria-label=" -->
    //y añade contenido
    contador++;
    
        /* <!-- <button type="button" class="btn btn-secondary">First One</button>
        <button type="button" class="btn btn-secondary">Second One</button>
        <div class="btn-group" role="group">
            <button id="dropdownId" type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    More
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">First Dropdown</a>
                <a class="dropdown-item" href="#">Second Dropdown</a>
            </div>
        </div>
    </div> --> */
}
    const newDiv = document.createElement("div")
    const newContent = document.createTextNode(`Hola! Qué tal? ${contador}`)
    //añade el elemento creado y su contenido al DOM
    var divActual = document.getElementById("div1");
    document.body.insertBefore(newDiv, divActual);