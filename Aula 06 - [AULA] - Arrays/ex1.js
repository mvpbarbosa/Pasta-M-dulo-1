console.clear();
console.log();
const prompt = require('prompt-sync')();

let numeros = []
let par = []
let impar = []
let contador = 0


while (contador < 20){
    num = +prompt('Digite um número: ');
    contador++
    numeros.push(num);

    if (num%2 == 0){
        par.push(num);
    } else {
        impar.push(num);
    }

}

console.log(numeros);
console.log(par);
console.log(impar);


