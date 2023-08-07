//Para criar uma função em javascript utilizamos a palavra reservada function.
//Exemplo:
 function saudacao() {
     console.log('Bom dia!');
 }

saudacao(); //Bom dia!

//Podemos passar parâmetros para a função.
//Exemplo:
function saudacao(nome) {
    console.log(`Bom dia ${nome}!`);
}

saudacao('Luiz'); //Bom dia Luiz!

//parametros são variáveis que recebem valores quando a função é chamada.

//para que a minha função retorne um valor utilizamos a palavra reservada return.
//Exemplo:
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel); //Bom dia Luiz!

//Podemos passar mais de um parâmetro para a função.
//Exemplo:
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2)); //4

//Não podemos utilizar uma variável declarada dentro de uma função fora dela.
//Exemplo:
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

//console.log(resultado); //resultado is not defined

//Se não passarmos um parâmetro para a função, o valor do parâmetro será undefined.
//Exemplo:
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2)); //NaN


//Podemos passar um valor padrão para o parâmetro a fim de evitar futuros erros.
//Exemplo:
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2)); //3

//Para criar uma função anonima podemos utilizar a palavra reservada function.
//uma função anonima é uma função sem nome.
//Exemplo:
const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9)); //3

//para criar uma arrow function utilizamos a seta =>.  
//Exemplo:
const raiza = n => {
    return n ** 0.5;
}

console.log(raiza(9)); //3

//se a função tiver apenas um parâmetro podemos remover os parenteses.
//Exemplo:
const raiz2 = n => n ** 0.5;

console.log(raiz2(9)); //3

//se a função tiver mais de um parâmetro devemos utilizar os parenteses.
//Exemplo:
const raiz3 = (n, m) => n ** 0.5 + m ** 0.5;

console.log(raiz3(9, 16)); //7

//se a função não tiver parâmetros devemos utilizar os parenteses vazios.
//Exemplo:
const raiz4 = () => 5 ** 0.5;

console.log(raiz4()); //2.23606797749979

//podemos utilizar uma função dentro de outra função.
//Exemplo:
function soma(x, y) {
    return x + y;
}

function multiplicacao(x, y) {
    const resultado = x * y;
    return resultado;
}

console.log(multiplicacao(soma(2, 2), soma(2, 2))); //16

//função que recebe uma função como parâmetro.
//Exemplo:
function executarFuncao(funcao) {
    funcao();
}

executarFuncao(saudacao); //Bom dia!