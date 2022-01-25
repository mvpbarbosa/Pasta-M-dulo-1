console.log();
console.clear();
var prompt = require('prompt-sync')();

let anos = +prompt('Quantos anos você tem? ');
let meses = +prompt('Quantos meses você tem? ');
let dias = +prompt('Quantos dias você tem? ');

let anos_dias = anos*365;
let meses_dias = meses*30;
let total = anos_dias+meses_dias+dias;

console.log(`Você viveu ${total} dias`);