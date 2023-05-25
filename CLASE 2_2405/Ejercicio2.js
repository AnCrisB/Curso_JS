//1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado" 

/* var nota1 = parseFloat(prompt("Ingrese la nota 1 del estudiante"));
var nota2 = parseFloat(prompt("Ingrese la nota 2 del estudiante"));
var nota3 = parseFloat(prompt("Ingrese la nota 3 del estudiante"));

let notaT;

notaT = (nota1 + nota2 + nota3) / 3;

if (notaT <= 3.9) {
    alert('Estudie');
    document.write('Estudie);
} else {
    alert('Becado');
    document.write('Becado');
    }

document.write(notaT); */

//---------------------------------------------------------------------------------------------------------------------------------
//2. Dado un número indicar si es par o impar y si es mayor de 10.

/* let num = parseFloat(prompt("Ingrese un número"))

if (num % 2 == 0) {
    alert('El número es par');
    } else 
        alert('El número es impar');

if (num > 10) {
    alert('El número es mayor a 10');
    } else
        alert('El número es menor de 10');
        
document.write(num); */

//---------------------------------------------------------------------------------------------------------------------------------
//3. Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

/* let corriente = parseFloat(prompt("Ingrese el valor de la intensidad de corriente en (A)"));
let resistencia = parseFloat(prompt('Ingrese el valor de la resistencia en (Ohm)'));

let voltaje = corriente * resistencia;

document.write('El valor del voltaje es: '+voltaje+'[V]'); */

//---------------------------------------------------------------------------------------------------------------------------------
//4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

/* persona1 = prompt('Ingrese el nombre de la persona 1');
edad1 = parseInt(prompt('Ingrese la edad de'+persona1));
persona2 = prompt('Ingrese el nombre de la persona 2');
edad2 = parseInt(prompt('Ingrese la edad de'+persona2));
persona3 = prompt('Ingrese el nombre de la persona 3');
edad3 = parseInt(prompt('Ingrese la edad de'+persona3));

if ((edad1 > edad2)&&(edad1 > edad3)) {
    alert(persona1+' es el/la mayor');
} else if ((edad2 > edad1)&&(edad2 > edad3)){
    alert(persona2+' es el/la mayor');
} else if ((edad3 > edad1)&&(edad3 >edad2)) {
    alert(persona3+' es el/la mayor');
} else {
    alert('No hay alguna persona mayor');
} */

//---------------------------------------------------------------------------------------------------------------------------------
//5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.

/* let num1 = parseFloat(prompt('Ingrese el primer número'));
let num2 = parseFloat(prompt('Ingrese el segundo número'));

if (num1 > num2) {
    let sum = num1 + num2;
    let rest = num1 - num2;
    document.write(num1+' es mayor que '+num2);
    document.write('La suma de '+num1+' y '+num2+' es: '+sum);
    document.write('La resta de '+num1+' y '+num2+' es: '+rest);
} else {
    let mult = num1 * num2;
    let div = num1 / num2;
    document.write(num2+' es mayor que '+num1);
    document.write('La multiplicación de '+num1+' entre '+num2+' es: '+mult);
    document.write('La división de '+num1+' entre '+num2+' es: '+div);
} */

//---------------------------------------------------------------------------------------------------------------------------------
//6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y  halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

/* let cantidad, notaMayor, notaMenor, nomMayor, nomMenor;

notaMayor = 0;
nomMenor = 100;
contHombres = 0;
contMujeres = 0;
nomMayor = '';
nomMenor = '';

cantidad = parseInt(prompt('Cuantos estudiante desea registrar'));

for (let i = 1; i <= cantidad; i++){
    nombre = prompt('Ingrese el nombre');
    sexo = prompt('Ingrese el sexo m/f').toLocaleLowerCase();
    nota = parseFloat(prompt('Ingrese la nota definitiva'));
    
    if (nota > notaMayor) {
        notaMayor = nota;
        nomMayor = nombre;
    }
    
    if (nota < notaMenor) {
        notaMenor = nota;
        nomMenor = nombre;
    }

    if (sexo =='m'){
        contHombres++;
    } else {
        contMujeres++;
    }
}

document.write(nomMayor+' tiene la nota mas alta con'+notaMayor+nomMenor+ ' tiene la nota mas baja con'+notaMenor+ 'Cantidad de hombres: '+contHombres+'Cantidad de mujeres: '+contMujeres); */

//---------------------------------------------------------------------------------------------------------------------------------
//7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

let nombre = prompt('Ingrese el nombre del producto');
let cantidad = parseInt(prompt('Ingrese cantidad'), 10);
let valor = parseInt(prompt('Ingrese valor'), 10);
alert('El total de ${nombre} es ${cantidad} y el total a pagar es ${cantidad*valor}')

//---------------------------------------------------------------------------------------------------------------------------------
//8. Programa que Ingrese por teclado: a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo b. la base y la altura de un rectángulo para mostrar el área del mismo.



//---------------------------------------------------------------------------------------------------------------------------------
//9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord esta en 15,50 metros.

//---------------------------------------------------------------------------------------------------------------------------------
//10. Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.
let num = parseFloat(prompt('Ingrese un número: '));
let acum = 0;
let listaNum = [];

while (num != 0){
    acum += num;
    listaNum.push(num);
    num = parseFloat(prompt('Ingrese la marca del atleta: '));
}

let maximo = Math.max(...listaNum);
let minimo = Math.min(...listaNum);
alert('La suma de los valores ingresado es ${acum}, el promedio de los valores ingresados es ${acum/listaNum.length}, la cantidad de números ingresador fueron ${(listaNum.length+1)}, el número de mayor valor ingresado es ${maximo} y el minimo es ${minimo}');