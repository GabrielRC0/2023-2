//Arrays:
//Podemos pensar nos arrays como uma lista de dados uma coleção, onde cada dado é um elemento do array.
//Podemos criar arrays de diversas formas, mas a mais comum é utilizando colchetes [].
//Exemplo:
const alunos = ['luiz', 'maria', 'jose'];
console.log(alunos);

//Os Arrays são indexados por elementos, ou seja, cada elemento possui um índice, que começa em 0 e vai até o tamanho do array - 1.
//Exemplo:
console.log(alunos[0]); //luiz 

//Para atualizarmos um elemento podemos utilizar o índice.
//Exemplo:
alunos[0] = 'luiza';

//Podemos adicionar novos elementos ao array utilizando o método push().
//Exemplo:
alunos.push('joão');
console.log(alunos); //['luiz', 'maria', 'jose', 'joão']
//ou podemos adicionar novos elementos ao array utilizando o índice.
//Exemplo:
alunos[4] = 'sergio';
alunos[alunos.length] = 'adriano';
console.log(alunos); //['luiza', 'maria', 'jose', 'joão', 'sergio', 'adriano']

//Para adicionar elementos no início do array podemos utilizar o método unshift().
//Exemplo:
alunos.unshift('fernanda');
console.log(alunos); //['fernanda', 'luiza', 'maria', 'jose', 'joão', 'sergio', 'adriano']

//Para remover elementos do final do array podemos utilizar o método pop().
//Exemplo:
alunos.pop();
console.log(alunos); //['fernanda', 'luiza', 'maria', 'jose', 'joão', 'sergio']
//podemos passar o elemento removido para uma variável.
//Exemplo:
const removido = alunos.pop();
console.log(removido); //sergio
console.log(alunos); //['fernanda', 'luiza', 'maria', 'jose', 'joão']

//Para remover elementos do início do array podemos utilizar o método shift().
//Exemplo:
alunos.shift();
console.log(alunos); //['luiza', 'maria', 'jose', 'joão']
//podemos passar o elemento removido para uma variável.
//Exemplo:
const removido2 = alunos.shift();
console.log(removido2); //luiza

//para remover os indices do array podemos utilizar o método delete.
//Exemplo:
//os indices não são reorganizados. o indice 1 continua vazio em vez de desaparecer.
delete alunos[1];
console.log(alunos); //['maria', empty, 'jose', 'joão']

//Para fatiar um array podemos utilizar o método slice().
//Exemplo:
//o método slice() não altera o array original.
console.log(alunos.slice(0, 3)); //['maria', empty, 'jose']
console.log(alunos.slice(0, -1)); //['maria', empty, 'jose']
console.log(alunos.slice(0, -2)); //['maria', empty]
console.log(alunos.slice(0, -3)); //['maria']

//Para verificar o tipo de um array podemos utilizar o método isArray().
//Exemplo:
console.log(Array.isArray(alunos)); //true

//Ou podemos utilizar o operador instanceof.
//Exemplo:
console.log(alunos instanceof Array); //true

//Ou podemos usar o typeof. 
//Exemplo:
console.log(typeof alunos); //object

//Para juntar arrays podemos utilizar o método concat().
//Exemplo:
const alunos2 = ['luiza', 'maria', 'jose'];
const alunos3 = ['fernanda', 'sergio', 'adriano'];
const alunos4 = alunos2.concat(alunos3);

console.log(alunos4); //['luiza', 'maria', 'jose', 'fernanda', 'sergio', 'adriano']

//Para juntar arrays podemos utilizar o operador spread, o operador spread ele copia o valor em vez de referenciar ele na memoria.
//Exemplo:
const alunos5 = [...alunos2, ...alunos3];
console.log(alunos5); //['luiza', 'maria', 'jose', 'fernanda', 'sergio', 'adriano']

//Para transformar um array em uma string podemos utilizar o método join().
//Exemplo:
console.log(alunos5.join(' ')); //luiza maria jose fernanda sergio adriano
console.log(alunos5.join(' - ')); //luiza - maria - jose - fernanda - sergio - adriano

//Para utilizar o método reverse() para inverter a ordem dos elementos.
//Exemplo:
console.log(alunos5.reverse()); //['adriano', 'sergio', 'fernanda', 'jose', 'maria', 'luiza']

//Para utilizar o método sort() para ordenar os elementos.
//Exemplo:
console.log(alunos5.sort()); //['adriano', 'fernanda', 'jose', 'luiza', 'maria', 'sergio']

//Para utilizar o método sort() para ordenar os elementos em ordem numérica.
//Exemplo:
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.sort()); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Para utilizar o método sort() para ordenar os elementos em ordem numérica.
//Exemplo:
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros2.sort((a, b) => a - b)); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Para transformar uma string em um array podemos utilizar o método split().
//Exemplo:
const nome = 'luiz otavio miranda';
const nomes = nome.split(' ');
console.log(nomes); //['luiz', 'otavio', 'miranda']

//Para ler um array podemos utilizar o método forEach().
//Exemplo:
const nomes2 = ['luiz', 'otavio', 'miranda'];
nomes2.forEach(function (valor, indice, array) {
    console.log(valor, indice, array);
}
);
//luiz 0 ['luiz', 'otavio', 'miranda']
//otavio 1 ['luiz', 'otavio', 'miranda']
//miranda 2 ['luiz', 'otavio', 'miranda']