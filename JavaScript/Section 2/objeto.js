//Para criarmos um objeto utilizamos as chaves {}.
//Exemplo:
const pessoaaaa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
};

console.log(pessoaaaa.nome); //Luiz
console.log(pessoaaaa.sobrenome); //Miranda
console.log(pessoaaaa.idade); //25

//parametro e argumento são coisas diferentes.
//Sendo parametro o que está na função e argumento o que está sendo passado para a função.

//Podemos criar uma função que crie um objeto.
//Exemplo:
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 55);
const pessoa3 = criaPessoa('João', 'Moreira', 45);

console.log(pessoa1.nome); //Luiz
console.log(pessoa2.nome); //Maria
console.log(pessoa3.nome); //João

//Podemos criar um objeto com uma função dentro dele.
//Exemplo:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    
    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
        //this é uma palavra reservada que faz referência ao objeto atual.
    }
};

pessoa.fala(); //A minha idade atual é 25.

