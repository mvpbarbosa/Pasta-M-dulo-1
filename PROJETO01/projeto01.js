console.log();
console.clear();
var prompt = require('prompt-sync')();

console.log(`Seu nome é Ackerman. Você é um espadachin caçador de demônios.
Para conseguir derrotar o Master Demon você precisa de algumas coisas.
1°: Você precisa dominar o "Estilo Miriguani" de luta com espada.
2°: Você precisa de uma "Lâmina Nichirin".
3°: Você precisa formar um time de 3 pessoas incluindo você.
4°: Você precisa de 3 cavalos.
5°: Você precisa rastrear o esconderijo do Master Demon.`);
console.log();

console.log('Responda as seguintes questões com "sim" ou "não":');


let contador = 0;
let pergunta1 = prompt('Você domina o Estilo Miriguani? ');
if (pergunta1 == 'sim'){
     contador++
} else {
    contador+0;
}

let pergunta2 = prompt('Você tem uma Lâmina Nichirin? ');
if (pergunta2 == 'sim'){
    contador++
} else {
   contador+0;
}

let pergunta3 = prompt('Você tem um time de 3 pessoas incluindo você? ');
if (pergunta3 == 'sim'){
    contador++
} else {
   contador+0;
}

let pergunta4 = prompt('Você tem os 3 cavalos? ');
if (pergunta4 == 'sim'){
    contador++
} else {
   contador+0;
}

let pergunta5 = prompt('Você conseguiu rastrear o esconderijo do Master Demon? ');
if (pergunta5 == 'sim'){
    contador++
} else {
   contador+0;
}

console.log();

if (contador == 0) {
    console.log('Você não conseguirá derrotar o Master Demon e vai morrer tentando.');
} else if  (contador == 1 || contador == 2) {
        console.log('Você não conseguirá derrotar o Master Demon, mas poderá sair de lá com vida ');
} else if (contador == 3) {
        console.log('Por pouco, você não derrotará o Master Demon');
} else if (contador == 4)  { 
        console.log('Você conseguirá derrotar o Master Demon, porém sairá da batalha ferido');
} else {
    console.log('Você conseguirá derrotar o Master Demon com facilidade');
}



console.log();


console.log(contador);