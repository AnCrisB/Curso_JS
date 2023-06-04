var contador =0
const boton = document.getElementById('boton');
boton.addEventListener('click', function(){
    contador+=1
    //traigo variables
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let Num=document.getElementById("Num").value

    let tabla=document.getElementById("tbody")

    //creo etiquetas de la tabla
    let tr=document.createElement("tr")//me crea etiquetas vacias
    let td1=document.createElement("td")
    let td2=document.createElement("td")
    let td3=document.createElement("td")
    let td4=document.createElement("td")

    // creo nodos texto
    let contadorr = document.createTextNode(contador)
    let nombree=document.createTextNode(name)
    let emaill=document.createTextNode(email)
    let telefonoo=document.createTextNode(Num)


    tr.setAttribute("id", contador)

    let filaUltima=document.getElementById("ultima")

    td1.appendChild(contadorr)
    td2.appendChild(nombree)
    td3.appendChild(emaill)
    td4.appendChild(telefonoo)

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)

    tabla.appendChild(tr)
});


const eliminar = document.getElementById('eliminar');
eliminar.addEventListener('click', function(){
    let ideliminar= document.getElementById('ideliminar').value;
    let tabla =document.getElementById(ideliminar)
    tabla.parentNode.removeChild(tabla)
    document.getElementById('ideliminar').value= "";
})
