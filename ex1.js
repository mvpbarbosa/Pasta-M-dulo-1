console.clear();
const prompt = require('prompt-sync')();

let num1 = +prompt('Digite um número: ');
let num2 = +prompt('Digite outro número: ');
console.log('Multiplicação = 1 || Divisão = 2 || Soma = 3 || Subtração = 4' );
let operador = prompt('Escolha um operador: ');

function calculadora(num1, num2, operador)
{
    if (operador == 1) 
    {
        console.log(`${num1} X ${num2} = ${num1 * num2}`);

    }
    else if (operador == 2)
    {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    }
    else if (operador == 3)
    {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    }
    else if (operador == 4)
    {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    }
    else
    {
        console.log(null)
    }
}

calculadora(num1, num2, operador);