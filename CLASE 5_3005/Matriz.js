//Crear numeros aleatorios en una matriz mxn, luego alinearlos y luego organizarlos de forma sinusoidal

var m = [];
    m [0] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [1] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [2] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [3] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];
    m [4] = [Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10), Math.ceil(Math.random()*10)];

/* const m = [];
    m [0] = [2, 1, 3, 5];
    m [1] = [6, 9, 7, 8];
    m [2] = [9, 8, 1, 0];
    m [3] = [4, 7, 5, 9];
    m [4] = [8, 2, 6, 1]; */

let = otro = m.flat();
console.log(otro);

let otro2 = otro.sort((a,b) => a-b);
console.log(otro2);
let m0 = otro2.slice(0,4)
let m1 = otro2.slice(4,8)
m1.reverse()
let m2 = otro2.slice(8,12)
let m3 = otro2.slice(12,16)
m3.reverse()
let m4 = otro2.slice(16,20)

console.log(m0, m1, m2, m3, m4);

let general = [m0, m1, m2, m3, m4]
console.log(general)