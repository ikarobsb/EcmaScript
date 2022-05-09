var ikaro = {
    nome: "Ikaro",
    idade: 34,
}

var ana = {
    nome: "Ana",
    idade: 29,
}

var luna = {
    nome: "Luna",
    idade: 4,
}

var users = [ikaro, ana, luna];

// Filter - retorna um array com os elementos que passaram no teste

// forEach - executa uma função para cada elemento do array

// Find - retorna o primeiro elemento que passou no teste

var usuario = users.find(user => user.nome === "Ikaro");

console.log(usuario);