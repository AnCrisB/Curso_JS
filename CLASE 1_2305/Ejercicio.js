//1. Declarar variables llamadas 'continente', 'país', 'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus valores de cantidad de habitantes, de acuerdo con su contexto real en su propio país. b. Registre sus valores en la consola.
let continente = 1.2*1000000000;
let pais = 51.2*1000000;
let departamento = 2.185*1000000;
let ciudad = 58113;
let barrio = 8000;
let direccion = 2;


/* console.log("Hay "+ continente +" de habitantes");
console.log("Hay "+ pais +" de habitantes");
console.log("Hay "+ departamento +" de habitantes");
console.log("Hay "+ ciudad +" de habitantes");
console.log("Hay "+ barrio +" de habitantes");
console.log("Hay "+ direccion +" de habitantes");

document.write("Hay "+ continente +" de habitantes"+'</br>'+ "Hay "+ pais +" de habitantes" +'</br>'+ "Hay "+ departamento +" de habitantes" +'</br>'+ "Hay "+ ciudad +" de habitantes" +'</br>'+ "Hay "+ barrio +" de habitantes" +'</br>'+ "Hay "+ direccion +" de habitantes"); */

//2. Declare una variable llamada 'esTercerMundista' y establezca su valor de acuerdo con su país. La variable debe contener un valor booleano. También declarar una variable 'idioma', pero no le asigne ningún valor todavía. b. Registrar los valores de 'esTercerMundista', 'continente', 'país' e 'idioma'
/* 
let esTercerMundista = true;
if (esTercerMundista) 
document.write(esTercerMundista="Si es Tercer Mundista"+'</br>');

let idioma;*/

pais = 51.2*1000000;
idioma = "Español";

/*console.log(esTercerMundista, continente, pais, idioma);
document.write("En el continente hay "+ continente +" de habitantes"+'</br>'+ "En el pais hay "+ pais +" de habitantes" +'</br>'+ "Se habla "+idioma); */


//3. Establezca el valor de 'idioma' en el idioma que se habla donde vive. b. Piense en qué variables deberían ser variables constantes (¿qué valores nunca cambian y cuáles podrían cambiar?). Luego, cambia estas variables a const.

const idioma = "Español";


///4. Si su país se dividiera por la mitad, y cada mitad contendría la mitad de la población, Entonces, ¿cuántas personas vivirían en cada mitad? b. Aumente la población de su país en 1M y registre el resultado en la consola c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más gente que ¿Finlandia? d. La población promedio de un país es de 33 millones de personas. ¿Tu país tiene menos gente que el país promedio? e. Basado en las variables que creó, cree una nueva variable 'descripción' que contiene una cadena con este formato: 'Colombia está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus 3000 personas hablan inglés.

let total;
total = pais/2;
document.write(total);
