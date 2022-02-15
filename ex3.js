console.log();
console.clear();
const prompt = require('prompt-sync')();

// // Crie um sistema de cadastro de funcionários que deve 
// criar um objeto novo para cada funcionário cadastrado com
// as informações: nome, cargo e salário. Ele deve armazenar 
// todos esses objetos em uma lista. Ao final de cada cadastro
// ele deve perguntar se deseja cadastrar um novo funcionário e 
// recomeçar o processo, e caso não haja mais funcionários para 
// cadastrar, ele deve chamar uma função que deve apresentar a 
// quantidade de funcionários com cada cargo e os nomes deles. 
// (Você pode limitar as opções de cargo para facilitar.)


let cadastro = ''
let funcionarioTotal = [];

do 
{
    let funcionario = {};
    funcionario.nome = prompt('Digite o nome do funcionário: ');
    funcionario.cargo = prompt('Digite o cargo do funcionário: ');
    funcionario.salario = prompt('Digite o salário do funcionário: ');

    funcionarioTotal.push(funcionario);
    cadastro = prompt('Deseja cadastrar um novo funcionário? ')
}
while (cadastro == 'sim')

console.log(funcionarioTotal);

function cargos()
{
    for(let i of funcionarioTotal)
    {
        i == 0;
        console.log(funcionarioTotal[i]);
        i ++
    }
}

console.log(cargos);