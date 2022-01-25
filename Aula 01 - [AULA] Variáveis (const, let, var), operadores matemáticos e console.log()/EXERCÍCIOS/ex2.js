console.log();
console.clear();
var prompt = require('prompt-sync')();

let peca = prompt('Digite o nome da peça: ');
let numpeca = +prompt('Digite o número de peças: ');
let valor = +prompt('Digite o valor de cada peça: ');
console.log();

let peca2 = prompt('Digite o nome da peça: ');
let numpeca2 = +prompt('Digite o número de peças: ');
let valor2 = +prompt('Digite o valor de cada peça: ');
console.log();

console.log(`Você está levando ${numpeca} ${peca} por R$${valor*numpeca} e ${numpeca2} ${peca2} por R$${valor2*numpeca2}. 
Valor total da compra: R$${valor*numpeca + valor2*numpeca2}`);
