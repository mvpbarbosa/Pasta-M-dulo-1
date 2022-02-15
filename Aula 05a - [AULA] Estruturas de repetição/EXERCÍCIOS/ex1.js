// Faça um programa que leia um nome de usuário e a sua senha 
// e não aceite a senha igual ao nome do usuário, mostrando uma 
// mensagem de erro e voltando a pedir as informações

console.clear();
const prompt = require('prompt-sync')();

let usuario = prompt('Nome de usuario: ');
let senha = prompt('Digite a senha: ');

while (usuario == senha) {
    console.log('A senha não pode ser igual ao nome de usuário.');
    usuario = prompt('Nome de usuario: ');
    senha = prompt('Digite a senha: ');
} 

// do {
//     console.log(numero);
//     numero++;
// } while (numero <= 100);

// while (numero <= 10) {
//     console.log(`O numero ${numero} ainda não é maior que 10`);
//     numero++;
// } console.log(`O número ${numero} é maior que 10.`);