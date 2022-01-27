console.clear();
const prompt = require('prompt-sync')();

console.log('Deseja jogar Jokenpô?');
let continuar = prompt('Resposta: ');
console.log('---------------------------------------------------');
let movimentos = ['Pedra', 'Papel', 'Tesoura'];
console.log('Quantas rodadas você deseja jogar? ');
let rodadas = +prompt('Resposta: ');
console.log('---------------------------------------------------');
let vitComp = 0;
let vitJogador = 0;

do 
{
    for (let contadorRodadas = 0; contadorRodadas < rodadas; contadorRodadas++)
    {
        console.log(`RODADA ${contadorRodadas + 1}`);
        console.log();
        console.log(`Pedra = 1 | Papel = 2 | Tesoura = 3`);
        let escolha = +prompt('Escolha seu movimento: ');
        let escolha2 = movimentos[escolha - 1];
        let escolhaAleatoria = Math.trunc(Math.random() * 3);
        let escolhaAleatoria2 = movimentos[escolhaAleatoria]
        console.log();

        while (escolha < 1 || escolha > 3)
        {   
            console.log('Resposta inválida');
            console.log('---------------------------------------------------');
            console.log(`RODADA ${contadorRodadas + 1}`);
            console.log();
            console.log(`Pedra = 1 | Papel = 2 | Tesoura = 3`);
            escolha = +prompt('Escolha seu movimento: ');

            if (escolha == 1 || escolha == 2 || escolha == 3)
            {
                break;
            }

        }
        console.log(`O jogador escolheu ${escolha2} e o computador escolheu ${escolhaAleatoria2}`);
        console.log('---------------------------------------------------');
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
while (continuar == 's')
console.log();

