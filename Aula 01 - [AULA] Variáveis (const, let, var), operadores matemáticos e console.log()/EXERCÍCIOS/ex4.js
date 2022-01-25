console.log();
console.clear();
var prompt = require('prompt-sync')();

let total = prompt('Informe sua idade em dias: ');

let anos = parseInt(total/365);
let meses = parseInt((total%365) /30);
let dias = parseInt((total%365) %30);

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias.`);
