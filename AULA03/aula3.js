console.log();
console.clear();
const prompt = require('prompt-sync')();

let local = prompt('Onde o Manoel está? ');

if (local == 'Rio') {
    console.log('Manoel verá o jogo do Vasco');
} else {
    console.log('Manoel não verá o jogo do Vasco');
}

console.log();