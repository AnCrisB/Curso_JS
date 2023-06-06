//Llamar el formulario
const formulario=document.getElementById('form')

//Trae información para pasar información
formulario.addEventListener('submit',(e)=>{ //Evento de escucha//(e) es un elemento que resume el formulario
    e.preventDefault();//Evitar que se recargue el formulario cuando se use el evento de escucha
    let data = Object.fromEntries(new FormData(e.target)); //Crea objeto en base a toda la info del "e tarjet"//en el "e.tarjet" trae el contenido de los inputs (checkbox, section, input, etc.)   
    console.log(data);
});
