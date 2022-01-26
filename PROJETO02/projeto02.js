console.clear();
const prompt = require('prompt-sync')();

let movimentos = ['Pedra', 'Papel', 'Tesoura'];
let escolha = prompt(`Pedra = 1 | Papel = 2 | Tesoura = 3 | Escolha seu movimento: `);
let escolha2 = movimentos[escolha - 1]
let escolhaAleatoria = Math.trunc(Math.random() * 3);
let escolhaAleatoria2 = movimentos[escolhaAleatoria]

console.log('');
console.log(`O jogador escolheu ${escolha2} e o computador escolheu ${escolhaAleatoria2}\n`)

if (escolha2 == escolhaAleatoria2) 
{
    console.log('Empate! Fim de jogo.');
} 
else if (escolha2 == movimentos[0])
{
    if (escolhaAleatoria2 == movimentos[1]) 
        {
            console.log('O computador venceu a partida.');
        } 
        else if (escolhaAleatoria2 == movimentos[2])
        {
            console.log('O jogador venceu a partida.');
        }    
} 
else if (escolha2 == movimentos[1])
{
    if (escolhaAleatoria2 == movimentos[2])
    {
        console.log('O computador venceu a partida.');
    } 
    else if (escolhaAleatoria2 == movimentos[0])
    {
        console.log('O jogador venceu a partida.');
    }
} 
else 
{
    if (escolhaAleatoria2 == movimentos[1])
    {
        console.log('O computador venceu a partida.');
    }
    else if (escolhaAleatoria2 == movimentos[0])
    {
        console.log('O jogador venceu a partida.');
    }
}


console.log(escolha2);
console.log(escolhaAleatoria2);
console.log();
