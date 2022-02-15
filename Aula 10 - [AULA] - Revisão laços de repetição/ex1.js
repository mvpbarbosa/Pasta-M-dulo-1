console.clear();
const prompt = require('prompt-sync')();

console.log('Digite um número');
let numero = prompt('Resposta: ');

if ((numero / numero) == 1) 
{
    console.log('É um número primo!');
}
else 
{
    console.log('Não é um número primo!');
}