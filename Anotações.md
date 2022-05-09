**EcmaScript**

*Variáveis* servem para armazenar valores.
*Escopo*: é o nível de acesso a variável.
*Constantes* são variáveis que *não* podem ser alteradas.

**Let** foi uma funcionalidade adicionada no ES6.

let nome = 'nome'; --> Global, local e de **bloco**
var sobrenome = 'sobrenome'; --> Global e local.

Var e let declaradas *fora da função* é global, ou seja, pode ser acessada em qualquer lugar do arquivo - escopo global.

Var declaradas e let dentro de uma função só é local, ou seja, só pode ser acessada dentro da função - escopo local.

*Let e o escopo de bloco*

Bloco é qualquer coisa que começa com { e termina com }, ou seja, é mais restrito ainda do que o escopo local.

Exemplos de bloco:
if (true) {
    let nome = 'nome';
}

console.log(nome); // não vai funcionar, pois não está no escopo do bloco.

**Parâmetros opcionais**

Ao se declarar um valor padrão dentro dos () de um parâmetro, o valor padrão é opcional, ou seja, o usuário pode ou não informá-lo.

Exemplo:
function soma (a, b = 50) {
    return a + b;
}

OBS: os parâmetros opcionais são os últimos parâmetros da função.

**Jsons encurtados**

var nome = "João";
var idade = 20;
var empresa = "Google";

var user = {
    nome: nome,
    idade: idade,
    empresa: empresa
}

// Encurtando o JSON

var userEncurt = {
    nome,
    idade,
    empresa
}

console.log(userEncurt);
console.log(user);

**Spread** 

var nome = "João";
var idade = 20;
var empresa = {
    nomeEmp: "Google",
    cidade: "São Paulo",
    site: "www.google.com",
    email: "joao@gmail.com"
}

var user = {
    nome,
    idade,
    empresa
}

// Operador Spread

var userSpread = {
    nome,
    idade,
    ...empresa // copia todos os atributos de empresa para userSpread
}

console.log(userSpread);

**Desestruturação de objetos**

var user = {
    nome: "Ikaro",
    prof: "programador",
    empresa: "Netflix",
    curso: "Formação Jode.js"
}

// Salvando dados de um objeto em uma ou mais variáveis  através da desestruturação:

var { nome, prof, empresa, curso } = user;



