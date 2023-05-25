//1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado" 

/* var nota1 = parseFloat(prompt("Ingrese la nota 1 del estudiante"));
var nota2 = parseFloat(prompt("Ingrese la nota 2 del estudiante"));
var nota3 = parseFloat(prompt("Ingrese la nota 3 del estudiante"));

let notaT;

notaT = (nota1 + nota2 + nota3) / 3;

if (notaT <= 3.9) {
    alert('Estudie');
} else {
    alert('Becado');
    }

document.write(notaT); */

//2. Dado un número indicar si es par o impar y si es mayor de 10.

/* var num = parseFloat(prompt("Ingrese un número"))

if (num % 2 == 0) {
    alert('El número es par');
    } else 
        alert('El número es impar');

if (num > 10) {
    alert('El número es mayor a 10');
    } else
        alert('El número es menor de 10');
        
document.write(num); */

//3. Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

let voltaje = parseFloat(prompt())
let corriente = parseFloat(prompt("Ingrese el valor de la corriente en (A)"))
let resistencia = parseFloat(prompt())
voltaje = corriente * resistencia;

document.write(voltaje);

//4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.