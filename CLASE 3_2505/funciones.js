//Elabore un programa JS que calcule la suma de todos los divisores propios de un entero dado. ej: dado 21 tenemos 7+3+1 = 11

let num1 = parseInt(prompt('Ingrese un número: '))
let num2 = parseInt(prompt('Ingrese otro número: '))

function divisor (num1){
    let acumulador = 0;
for (num2 = 1; num2 <= num1 ; num2++){
    if (num1 % num2 === 0) {
    document.write (`El número ${num2} es divisible entre ${num1}<br>`)
    }}
    if (num2=true){
        acumulador = acumulador + 1
        document.write(`La suma de los número propios es: ${num2}`)
    }
return(acumulador)
}


if (divisor(num1) === num2 && divisor(num2) === num1){
    alert('Los numeros son amigos')
} else {
    alert('Los numeros no son amigos')
}
