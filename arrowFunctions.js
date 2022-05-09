// Arrow functions - é uma forma mais reduzida de escrever uma função.

// Modos de escrever uma função 

function soma(a, b) {
    return a + b;
}

var mult = function (a, b) {
    return a * b;
}

// Arrow functions - só pode ser utilizada para saçvá-la em uma variável ou para trabalhar como call backs

var arrowSoma = (a, b) => {
    return a + b;
}

console.log(arrowSoma(1, 2));

// Funções com apenas uma linha

var arrowMult = a => console.log(a*2);

// Outra forma de reurn para funções de uma linha
var mult3 = (a,b,c) => a * b * c;

console.log(mult3(1, 2, 3));
