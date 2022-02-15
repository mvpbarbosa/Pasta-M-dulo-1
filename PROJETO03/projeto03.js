console.clear();
const prompt = require("prompt-sync")();

// Crie variáveis para armazenar os status do personagem (Fome? Dinheiro? Saúde? Força?).
// Que tipo de variável seria a mais adequada para isso?
let status = {
  saude: 30,
  fome: 30,
  humor: 30,
};

//---------------------------------------------------------------------------------------------------
//Variáveis
let continuar = +prompt(`Deseja jogar? Sim [1] || Não [2]
Digite sua escolha: `);
console.log("---------------------------------------------------");
console.log();
let escolha = 0;
let resultadoDesafio1 = "";

//---------------------------------------------------------------------------------------------------

//Função de exibir status
function exibirStatus() {
console.log(`

Fome: ${status.fome}
Humor ${status.humor}
Saúde: ${status.saude}`);
}

//Função de validação de escolhas
function validacao(escolha) {
while (escolha != 1 && escolha != 2) {
console.log();
console.error("Escolha inválida.");
console.log();
escolha = +prompt("Digite novamente: ");
}
return escolha;
}

//---------------------------------------------------------------------------------------------------
while (continuar == 1) {
console.clear();
//Redefinindo a variável "continuar" para evitar uma repetição desnecessária do while
continuar = 2;

//Obejto com informações do ciclo (dia, hora e minutos)
var horario = {
dia: 1,
horas: 5,
minutos: 43,
};

//Função para controle de data e hora
function dataHora() {
while (horario.minutos >= 60) {
    minutosRestantes = horario.minutos - 60;
    horario.minutos = minutosRestantes;
    horario.horas++;
}
while (horario.horas >= 24) {
    horasRestantes = horario.horas - 24;
    horario.horas = horasRestantes;
    horario.dia++;
}

if (horario.horas <= 9 && horario.minutos <= 9) {
console.log(`Dia: ${horario.dia}

Hora: 0${horario.horas}:0${horario.minutos}
`);
} else if (horario.horas <= 9) {
console.log(`Dia: ${horario.dia}

Hora: 0${horario.horas}:${horario.minutos}
`);
} else if (horario.minutos <= 9) {
console.log(`Dia: ${horario.dia}

Hora: ${horario.horas}:0${horario.minutos}
`);
} else {
console.log(`Dia: ${horario.dia}

Hora: ${horario.horas}:${horario.minutos}
`);
}
}

//Variáveis
let cafe = "";
let contador = 0;
let resultadoDesafio1 = "";
let resultadoDesafio2 = "";

//Parte 1
dataHora();
console.log();

console.log(`Hoje é o dia da seletiva para a promoção do seu trabalho. Você precisa se preparar para estar no escritório até 7:00.

Abaixo você verá sua barra de status que será demonstrada após cada escolha`);

exibirStatus();
console.log("---------------------------------------------------");
console.log();
console.log(
`Você acabou de acordar e foi tomar a sua medicação *Saúde +40*. Após isso, desceu para o café`
);

horario.minutos = horario.minutos + 2;
status.saude = status.saude + 40;

exibirStatus();
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Pai: Olá filho, bom dia! Hoje é o grande dia, não é mesmo?

Mayson: É sim, pai...

Pai: O que houve? Não está empolgado?

Mayson: Não é isso. Você está me perguntando isso todos os dias há 3 semanas desde que te contei sobre a promoção.

Pai: Ah, desculpa. Eu só estou preocupado... Enfim, o que vai querer de café?`);

console.log();
escolha = +prompt(`Opções: Sucrilhos [1] || Salada de Frutas [2] 
Digite sua escolha: `);

validacao(escolha);

if (escolha == 1) {
cafe = "Sucrilhos";
} else {
cafe = "Salada de Frutas";
}
console.log();
console.log(`Mayson: Eu vou querer ${cafe}

Após tomar café *Fome +40*, você vai para o escritório`);

horario.minutos = horario.minutos + 30;
status.fome = status.fome + 40;

exibirStatus();
console.log("---------------------------------------------------");

horario.minutos = horario.minutos + 40;
console.log();
dataHora();
console.log();

console.log(`Você chegou ao trabalho.

Seu chefe já estava lhe esperando para iniciar a seletiva.

Chefe: Olá, Mayson. Tá preparado?

Mayson: Com certeza, Sr Bankler!

Chefe: Bom... A seletiva será dividida em 3 dias consecutivos e terá 1 desafio por dia. Como temos bastante candidatos
os desafios serão MUITO rigorosos.
Hoje o desafio será resolver 5 questões de conhecimentos em JS. Boa sorte à todos!

Você abre o arquivo em seu computador e começa a responder as questões.`);
console.log("---------------------------------------------------");
console.log();

horario.minutos = horario.minutos + 5;
dataHora();
console.log();

console.log(`Questão 1
Como tranformar uma string maiúscula em minúscula em JS?`);

escolha = +prompt(`.toLowerCase [1] || .toUpperCase [2]
Digite sua opção: `);

validacao(escolha);

if (escolha == 1) {
contador++;
} else {
contador + 0;
}

horario.minutos = horario.minutos + 10;
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Questão 2
Qual o nome da estrutura usada para armazenar elementos como uma lista:`);
escolha = +prompt(`Objeto [1] || Array [2]
Digite sua opção: `);

validacao(escolha);

if (escolha == 2) {
contador++;
} else {
contador + 0;
}

horario.minutos = horario.minutos + 10;
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Questão 3
A sintaxe "for (let i = 0; i < 10; i++) {
    console.log(i);
}" 
pertence à qual estrutura de repetição?`);
escolha = +prompt(`For indexado [1] || For in [2]
Digite sua opção: `);

validacao(escolha);

if (escolha == 1) {
contador++;
} else {
contador + 0;
}

horario.minutos = horario.minutos + 10;
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Questão 4
"SE uma variável tiver X valor, o computador fará algo. SENÃO, fará outra coisa."
Essa lógica é utilizada para:`);
escolha = +prompt(`Do... While [1] || if && else [2]
Digite sua opção: `);

validacao(escolha);

if (escolha == 2) {
contador++;
} else {
contador + 0;
}

horario.minutos = horario.minutos + 10;
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Questão 5
Comando utilizado para exibir uma mensagem na tela:`);
escolha = +prompt(`console.log [1] || var mensagem = 'oi' [2]
Digite sua opção: `);

validacao(escolha);

if (escolha == 1) {
contador++;
} else {
contador + 0;
}

horario.minutos = horario.minutos + 10;

if (contador == 5) {
resultadoDesafio1 = "positivo";
} else {
resultadoDesafio1 = "negativo";
}

console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(
`Você termina seu desafio e se sente mais relaxado para trabalhar *Humor +50*`
);
status.humor = status.humor + 50;

exibirStatus();
console.log();

console.log(`Após isso, você passa o resto do dia trabalhando...`);
console.log("---------------------------------------------------");
console.log();

horario.minutos = horario.minutos + 15;
horario.horas = horario.horas + 10;
status.humor = status.humor - 25;

dataHora();
console.log();

console.log(`Hora de ir para casa. 
Você finaliza seu trabalho e volta de Uber para casa...

Chegando em casa você vai direto checar o resultado do desafio.

"Seu resultado foi ${resultadoDesafio1}!"`);

console.log();
if (resultadoDesafio1 == "positivo") {
console.log("Você passou!  *Humor +20*");
status.humor = status.humor + 20;
console.log();
exibirStatus();
console.log();
console.log(
`Após ver que o resultado foi positivo, você dorme e descansa para o próximo dia de desafio.`
);
console.log("---------------------------------------------------");
horario.horas = horario.horas + 11;
horario.minutos = horario.minutos + 38;

//Parte 2
console.log();
dataHora();
console.log();
console.log(`Mais um dia se incia, e dessa vez você acorda mais disposto e alegre.
    
Você retoma sua rotina: 
- Toma sua medicação (saúde +40)
- Toma seu café (fome +40)

Seu pai não está em casa pois saiu para uma reunião.

Mayson: Bom, são exatamente 06:20. Já é hora de ir.

Você sai e vai para o trabalho.`);

horario.horas = horario.horas + 1;
horario.minutos = horario.minutos + 17;

console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Chefe: Bom... Sobraram 20 candidatos. É um bom número, mas como sabem, só temos 1 vaga. Hoje será o 2° desafio.
Nele, vocês terão que responder apenas UMA pergunta. Boa sorte à todos...`);
console.log("---------------------------------------------------");
console.log();
horario.minutos = horario.minutos + 15;
dataHora();
console.log();
console.log(`-PERGUNTA-
O que é método em JS?`);
console.log();
escolha =
+prompt(`Opções: Método é quando existe uma função dentro de um objeto. [1] || Método é quando definimos um índice que será substituído dentro uma array. [2]
Digite sua opção: `);
validacao(escolha);
console.log();
if (escolha == 1) {
resultadoDesafio2 = "positivo";
} else {
resultadoDesafio2 = "negativo";
}
console.log("---------------------------------------------------");
console.log();
horario.minutos = horario.minutos + 15;
dataHora();
console.log();
console.log(
    `Você terminou o Desafio 2 com muita facilidade e continuou o seu trabalho, porém, com um pensamento estranho de como se estivesse sendo controlado.`
);
console.log("---------------------------------------------------");
console.log();
horario.horas = horario.horas + 10;
horario.minutos = horario.minutos + 30;
dataHora();
console.log();
console.log(`10 horas depois...
    
Mayson: Bom, acho que já posso ir pra casa. Hoje o dia foi bastante cansativo`);
console.log("---------------------------------------------------");
console.log();
horario.minutos = horario.minutos + 30;
dataHora();
console.log();
console.log(`Você chegou em casa e seu pai estava lhe esperando.
    
Pai: Oi, filho! Como foi hoje?

Mayson: Foi bem, participei do 2° Desafio...

Pai: Que bom! Você nem tinha me contado que havia passado no 1°...

Mayson: Foi mal, devo ter esquecido... Enfim, vou checar o resultado e já te aviso.

Pai: Não quer ficar e conversar?`);

console.log();
escolha = +prompt(`Sim [1] || Não [2]
Digite sua opção: `);
validacao(escolha);
console.log("---------------------------------------------------");
console.log();
horario.minutos = horario.minutos + 51
if (escolha == 1) {
horario.minutos = horario.minutos + 5
console.log(`Mayson: Tá bom. Sobre o que quer conversar?
        
Pai: Sabe, desde que sua mãe... Bom, você sabe. Você não tem falado tanto comigo desde então. Eu fiz algo de errado?

Mayson: Não pai. Eu só não me sinto mais tão à vontade quanto antes. Talvez eu ainda não esteja preparado  para seguir a vida como se ela anda estivesse aqui.

Pai: Tudo bem, eu te entendo. Não está sendo fácil pra mim também. Bom... Você deve estar cansadoz vou te deixar em paz.

Mayson: Valeu, pai. Boa noite.

Pai: Boa noite, filho.`);
} else {
console.log(`Mayson: Não, obrigado. Estou muito cansado. Boa noite.
        
Pai: Ah, ok...`);
}
console.log("---------------------------------------------------");
console.log();
dataHora();
console.log();
console.log(`Voce sobe para o seu quarto e vai checar o resultado do 2° desafio...
    
"O resultado foi ${resultadoDesafio2}"`);
console.log();

if (resultadoDesafio2 == "positivo") {
continuar = 2;
console.log("Você passou!");

console.log();
console.log(
`Após saber o resultado, você deita e dorme para o próximo dia`
);
console.log("---------------------------------------------------");
console.log();

horario.horas = horario.horas + 11;
horario.minutos = horario.minutos + 63;

//Parte 3
dataHora();
console.log();
console.log(`Dessa vez você acorda cansado e atrasado.

Mayson: Droga! Preciso sair de casa urgentemente!

Você se arruma rapidamente e sai de casa`);
console.log("---------------------------------------------------");

horario.minutos = horario.minutos + 20;
console.log();
dataHora();
console.log();
console.log(
`Para o seu azar, hoje está chovendo muito e o trânsito aumenta +30 minutos do percurso.`
);
console.log("---------------------------------------------------");

horario.minutos = horario.minutos + 70;
console.log();
dataHora();
console.log();
console.log(`Você chega muito atrasado para o desafio.

Mayson: Por favor, senhor Bankler, me deixa fazer o desafio? Prometo não te decepcionar.

Chefe: Olha, Mayson. Não sei se seria legal para a minha imagem abrir uma exceção para você. Você sabia muito bem das regras...

Mayson: Eu sei disso, mas houve um imprevisto. Por favor, me deixa fazer o desafio! Eu faço 4 horas extras todos os dias por 6 meses.

Chefe: Hmmm... Não vá pensando que serei sempre assim. Anda logo e vai fazer a droga do teste.

Mayson: Muito obrigado!

Você corre para a sala do teste e começa o seu desafio.`);
console.log("---------------------------------------------------");
horario.minutos = horario.minutos + 5;
console.log();
dataHora();
console.log();
console.log(`-DESAFIO 3-

Você deve responder APENAS UMA questão. 
    
Este é usado para mostrar se um valor é "true" ou "false":`);
console.log();
escolha = +prompt(`Opções: .push [1] || .then [2]
Digite sua opção: `);
validacao(escolha);
console.log();
console.log(`Mayson: Eu sei que a resposta não é essa, mas por que eu coloquei isso?
Mayson: Acho que estou ficando doido, só pode...
Mayson: Não tô conseguindo mudar minha resposta. Tem algo de errado comigo!
Mayson: Acho melhor eu ir para casa
    
Você corre desesperadamente pelo escritório até a saída`);
console.log("---------------------------------------------------");
horario.minutos = horario.minutos + 40;
console.log();
dataHora();
console.log();
console.log(`Você chega em casa frustrado e corre para o banheiro, lava o rosto e se encara no espelho.

Lá ao fundo você pode ouvir o som de uma notificação de e-mail

É um e-mail do Sr. Bankler...

"Infelizmente seu resultado foi negativo!"

Mayson: Droga, droga, DROGAA...

Você joga tudo que estava encima de sua mesa para o chão.

De repente algo aparece na tela do seu computador...

"Olá! Mayson."

Mayson: QUÊ? Que dorga é essa???

"Eu te conheço muito bem"

Mayson: Quem é você??? O que é você???`);
console.log();
escolha = +prompt(`Opções: Blue Edtech [1] || Loucura [2]
Digite sua opção: `);
validacao(escolha);
console.log();
console.log("---------------------------------------------------");
horario.minutos = horario.minutos + 5
console.log();
dataHora();
console.log();
if (escolha == 1) {
console.log(`"A verdade é que eu sou um aluno de uma escola de programação chamada Blue Edtech. 
E você é apenas um personagem de um projeto que estou fazendo para passar de módulo."

Mayson: Como assim? Me explica mais, acho que estou ficando louco.

"Bom... Eu estou fazendo um projeto em que é necessário criar um  Jogo de Ficção Interativa na liguagem de JavaScript.
Você, seu pai, seu emprego, tudo na sua vida não passa de linhas de código dentro de um "console.log" e nada mais..."

Mayson: Não é isso. Eu tô louco. Não pode ser real. Meu computador não pode falar comigo.

"Não só posso, como faço. E agora você terá duas escolhas: Enlouquecer e atear fogo em sua casa [1] || Contar a verdade para o seu pai [2]"

Mayson: Eu não vou escolher nada disso!!!

"Ah é?"`);
console.log();
escolha = +prompt(`Digite sua opção: `);
validacao(escolha);
console.log("---------------------------------------------------");
console.log();
horario.minutos = horario.minutos + 5
dataHora();
console.log();
if (escolha == 1) {
console.log(`Seu corpo age de forma descontrolada descendo as escadas e indo em direção à cozinha.
        
Você liga todas as bocas do fogão e pega uma caixa de fósforos.

Antes que você os acenda a Alexia diz algo estranho...

"Bom... Você será o motivo da minha nota 10. Obrigado e... Você que está jogando, ajeite sua postura na cadeira, sua coluna agradece."

Mayson: Que merda é essa??? SOCORROOOOOOO!!!

Você risca o fósforo e... *BOOOM*
`);
} else {
console.log(`Seu pai chega em casa e ouve você gritando sozinho no quarto. Logo, ele sobe as escadas correndo para saber o que está acontecendo.
        
Pai: Filho, você está bem???

Mayson: É ELE! É ELE! Ele está me deixando assim
Diz você apontando euforicamente para a tela do computador, mas a tela está totalmente preta

Pai: Filho, você tomou sua medicação? Eu realmente estava preocupado com você, sabia que havia algo de errado.

Mayson: Não pai. Você não está entendendo. É tudo culpa dele. Uma ideia de Blue Edtech e etc. Eu não sei o que é isso, mas isso está me deixando assim.

Pai: Filho, você está sem sua medicação deve estar vendo coisas. Acho melhor você voltar para o manicômio.

Aceitar a ideia do seu pai e se internar [1] || Atacar ele com uma caneta [2]`);

escolha = +prompt(`Digite sua escolha: `);
validacao(escolha);
console.log("---------------------------------------------------");
console.log();
if (escolha == 1) {
console.log(`Sua respiração fica menos ofegante, você fica menos agressivo e começa a chorar.

Mayson: Pai, por favor... Liga logo pra eles. Eu não quero ficar aqui...

Seu pai liga para os médicos e eles vêm te buscar e levar ao manicômio.

Você passa o resto de sua vida internado lá...
`);



continuar = +prompt(`Deseja jogar novamente? Sim [1] || Não [2]
Digite sua escolha: `);
validacao(continuar);
} else {
console.log(`Você começa a se lembrar sobre o que o computador disse sobre controlar tudo e que até seu pai é uma mísera linda de códigos.
            
Você não pensa duas vezes e parte pra cima dele com uma caneta.

Ao fim, você o empunhala 5 vezes na barriga e ele acaba morrendo.

"Tudo do jeito que eu quis. Obrigado, Mayson, você serviu de experiência."

Um som de sirene começa a tocar. Seus vizinhos ouviram toda a discussão e chamaram a polícia. 

Os policiais te prendem e você passa por um julgamento.

Você é considerado culpado e condenado à pena de morte.
`);


continuar = +prompt(`Deseja jogar novamente? Sim [1] || Não [2]
Digite sua escolha: `);
validacao(continuar);
}
}
} else {
console.log(`Você percebe que está ficando louco por conta da pressão e começa a quebrar tudo.
        
Seu pai chega em casa e ouve todo o barulho, logo sobe para o seu quarto para te ajudar

Pai: Filho, você está bem? O que houve?

Mayson: Não sei pai, eu estou ficando louco

Pai: Não diga isso, você só deve estar cansado, eu vou fazer umchá para você. Se acalme!

Mayson: EU NÃO QUERO CHÁ!

Pai: Acho que vou precisar te internar, me desculpe.

Aceitar a ideia do seu pai e se internar [1] || Atacar ele com uma caneta [2]`);

escolha = +prompt(`Digite sua escolha: `);
validacao(escolha);
console.log("---------------------------------------------------");
console.log();
if (escolha == 1) {
console.log(`Sua respiração fica menos ofegante, você fica menos agressivo e começa a chorar.
        
Mayson: Pai, por favor... Liga logo pra eles. Eu não quero ficar aqui...

Seu pai liga para os médicos e eles vêm te buscar e levar ao manicômio.

Você passa o resto de sua vida internado lá...`);


continuar = +prompt(`Deseja jogar novamente? Sim [1] || Não [2]
Digite sua escolha: `);
validacao(continuar);
} else {
console.log(`Você não aceita essa ideia de se internar e sem falar nada...
        
Você parte para cima dele com uma caneta.

Ao fim, você o empunhala 5 vezes na barriga e ele acaba morrendo.

Um som de sirene começa a tocar. Seus vizinhos ouviram toda a discussão e chamaram a polícia. 

Os policiais te prendem e você passa por um julgamento.

Você é considerado culpado e condenado à pena de morte.`);


continuar = +prompt(`Deseja jogar novamente? Sim [1] || Não [2]
Digite sua escolha: `);
validacao(continuar);
}
}
}
  } else {
  continuar = +prompt(`Deseja jogar novamente? Sim [1] || Não [2]
  Digite sua escolha: `);
  validacao(continuar);
  console.log();
  }
}

console.log("GAME OVER...");
//FIM DE JOGO!