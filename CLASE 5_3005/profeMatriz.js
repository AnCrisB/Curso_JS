let filas = 5; 
let cols = 5;

let m = []; let o = [];
    for (let i = 0; i < filas; i++)

Matriz vacia
se puebla la matriz
Contiene el arreglo de cafa fila, array.from devuelve un arreglo

toma pedazo de vector y se lo asigna a otro

let filas = 3;//prompt("Cantidad de filas?");
let cols = 3; //prompt("Cantidad de columnas?");

let m=[]; let o=[];
for (let i=0; i<filas; i++){
    m[i]=Array.from({length: cols}, () => Math.floor(Math.random() * 100));
}
console.log(m);
const l = m.flat().sort((a,b)=>a-b);
for(let i=0;i<filas;i++) {
    o[i]=l.slice(icols,cols(i+1));
    if (i%2==1) o[i].reverse();
}
console.log(o);