console.clear();
const prompt = require('prompt-sync')();

console.log('--------------------- JOKENPÔ ---------------------')
console.log(`Caso você não saiba, vocês podem escolher entre pedra, 
papel e tesoura. E funciona assim: a tesoura corta o 
papel,  mas quebra com a pedra; o papel embrulha a pedra, 
mas é cortado pela tesoura e a  pedra quebra 
a tesoura e é embrulhada pelo papel.`)
console.log('---------------------------------------------------');
console.log('Deseja jogar Jokenpô?');
let continuar = prompt('Resposta: ');
console.log();
let movimentos = ['Pedra', 'Papel', 'Tesoura'];
console.log('---------------------------------------------------');
let vitComp = 0;
let vitJogador = 0;

while (continuar == 'sim' || continuar == 'Sim' || continuar == 'SIM' || continuar == 's' || continuar == 'S')
{
    console.log('Quantas rodadas você deseja jogar? ');
    let rodadas = +prompt('Resposta: ');
    console.log('---------------------------------------------------');
    do 
{
    for (let contadorRodadas = 0; contadorRodadas < rodadas; contadorRodadas++)
    {
        console.log(`RODADA ${contadorRodadas + 1}`);
        console.log();
        console.log(`Pedra = 1 | Papel = 2 | Tesoura = 3`);
        let escolha = +prompt('Escolha seu movimento: ');
        console.log();
        let escolha2 = movimentos[escolha - 1];
        let escolhaAleatoria = Math.trunc(Math.random() * 3);
        let escolhaAleatoria2 = movimentos[escolhaAleatoria]

        while (escolha < 1 || escolha > 3)
        {   
            console.log('Resposta inválida');
            console.log('---------------------------------------------------');
            console.log(`RODADA ${contadorRodadas + 1}`);
            console.log();
            console.log(`Pedra = 1 | Papel = 2 | Tesoura = 3`);
            escolha = +prompt('Escolha seu movimento: ');
            escolha2 = movimentos[escolha - 1];

            if (escolha == 1 || escolha == 2 || escolha == 3)
            {
                break;
            }

        }
        console.log(`O jogador escolheu: ${escolha2} 
O computador escolheu: ${escolhaAleatoria2}`);
        console.log();

        if (escolha2 == escolhaAleatoria2)
        {
            console.log('Empate! O jogador e o computador recebem pontos. ');
            vitComp++
            vitJogador++
            console.log();
        
        } 
        else if (escolha2 == movimentos[0])
        {
            if (escolhaAleatoria2 == movimentos[1])
            {
                console.log('O computador venceu a rodada!');
                vitComp++
                console.log();

            }
            else if (escolhaAleatoria2 == movimentos[2])
            {
                console.log('O jogador venceu a rodada!')
                vitJogador++
                console.log();

            }
        }
        else if (escolha2 == movimentos[1])
        {
            if (escolhaAleatoria2 == movimentos [2])
            {
                console.log('O computador venceu a rodada!');
                vitComp++
                console.log();

            }
            else if (escolhaAleatoria2 == movimentos[0])
            {
                console.log('O jogador venceu a rodada!');
                vitJogador++
                console.log();

            }
        }
        else 
        {
            if (escolhaAleatoria2 == movimentos[0])
            {
                console.log('O computador venceu a rodada!');
                vitComp++
                console.log();

            }
            else if (escolhaAleatoria2 == movimentos[1])
            {
                console.log('O jogador venceu a rodada!'); 
                vitJogador++
                console.log();

            }
        }
        console.log();
        console.log(`JOGADOR ${vitJogador} X ${vitComp} COMPUTADOR`);
        console.log('---------------------------------------------------');
        console.log();
    }
    if (vitJogador == vitComp)
    {
        console.log('O jogo terminou em empate!');
    }
    else if (vitComp > vitJogador)
    {
        console.log('O Grande Campeão foi o Computador!');
    }
    else if (vitJogador > vitComp)
    {
        console.log('O Grande Campeão foi o Jogador!');
    }
        console.log('---------------------------------------------------');
        console.log('Deseja continuar jogando?');
        continuar = prompt('Resposta: ');
        console.log();
} 
while (continuar == 'sim' || continuar == 'Sim' || continuar == 'SIM' || continuar == 's' || continuar == 'S')
console.log();
} 
if (continuar == 'nao' || continuar == 'não' || continuar == 'Não' || continuar == 'Nao'|| continuar == 'n' || continuar == 'N')
{
    console.log('Fim de Jogo!')
}
console.log();