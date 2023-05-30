//Tomar 3 funciones definidas de la manera tradicional y expresarlas como funciones de flecha

//1. Formula combinatoria

/* function factorial(n){
    if(n==1)(n == 0){
        return(1);
    } else {
        return(n*factorial(n-1));
    }
}

function combinatoria (n,r) {
    comb = factorial(n)/(factorial(n-r)*factorial(r));
    return(comb);
}
let (n) = parseInt(prompt('Ingrese un número'));
document.write(comb) */

function factorial (a) {
    let factorial = 1
    for (let i = 2; i <= a; i++) {
        factorial *= i
    }
    return factorial
}

const fact = factorial (5)
document.write(fact)

    //Formula flecha


let combinatoria = a => factorial (a) 


//2. Formula cateto