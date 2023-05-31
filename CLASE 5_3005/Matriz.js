//Crear numeros aleatorios en una matriz mxn, luego alinearlos y luego organizarlos de forma sinusoidal

/* var m = [];
    m [0] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [1] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [2] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [3] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)]; */

const m = [];
    m [0] = [2, 1, 3, 5];
    m [1] = [6, 9, 7, 8];
    m [2] = [9, 8, 1, 0];
    m [3] = [4, 7, 5, 9];
    m [4] = [8, 2, 6, 1];

const numeros = [3, 23, 12];
numeros.sort();

const num = [3, 23, 12];
num.sort(function(a,b){return b-a});

const array8 = [50, 4, 10, 2, 70, 20];
console.log(array8.sort((a,b) => a-b)); 
console.log(array8)


console.log(array8.sort((a,b) => b-a)); 
console.log(array8)

for (i = 0; i < m.length(); i += 3) {
    var column = m.slice(i, i, + 3);
    console.log(column.join('/t'))
}

console.log (m.flat().sort((a,b) => a-b))