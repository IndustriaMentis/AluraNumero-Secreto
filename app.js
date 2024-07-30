let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1

function exibirTextonaTela(tag, texto){ 
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    (rate:1.2))
} 

function mensagemInicial(){
    exibirTextonaTela('h1',"Jogo do numero secreto")
    exibirTextonaTela('p', "Escolha um numero entre 1 e 100")
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
    if(chute == numeroSecreto){
        exibirTextonaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas':
        'tentativa';
        let mensagemTentativas = `Você descobriu o número numero secreto com 
        ${tentativas} ${palavraTentativa}!`
        exibirTextonaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else{
        if(chute > numeroSecreto){       
        exibirTextonaTela('p', 'O numero secreto é menor do que a sua escolha!')
        } else{
        exibirTextonaTela('p', 'O numero secreto é maior do que a sua escolha!')
        }
        tentativas++;
    
    }
}
function gerarNumeroAleatorio() {    
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log
        return numeroEscolhido;
    }
}

function limparocampo(){
    chute = document.querySelector('input');
    chute.value = '' ;
}
function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparocampo()
        exibirMensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}

//Funcao js

function JavaScriptéincrivel(){
    alert("Eu amo a linguagem de programação Java script, porque ela é muito útil!")

}

///software que pergunta o nome da cidade.
function qualonome(){
    let resposta = prompt("Em qual cidade do Brasil você esteve?")
    alert(`Eu estive em ${resposta} e eu lembrei de você`)
}


//Projetos extras javaScript para treinar:
let qualéocontinente = prompt("Digite para quantos continentes você ja foi")
if(qualéocontinente >= 2){
    alert("Você já viajou muito!")
}
else(qualéocontinente <= 2){
    alert("VocÊ ainda tem que viajar bastante!")
}


//este software oma numeros escolhidos pelo usuario.


//Este software soma números:
alert("Por favor, usuário, você poderia digitar 2 números inteiros?");
let primeironumero = parseInt(prompt("Digite o primeiro numero aqui!"));
let segundonumero = parseInt(prompt("Digite o segundo numero aqui!"));
let respostadasoma = primeironumero + segundonumero
alert(respostadasoma);

//Este programa soma e subtrai numeros escolhidos pelo usuário:
let somadonumero1 = prompt("Olá, usuário! Digite um numero para somá-lo a outro.")
let somadonumero2 = prompt("Olá, usuário! Digite um número para somá-lo a outro.")
let respostasoma = somadonumero1 + somadonumero2
function somar(respostasoma){
    if(respostasoma >= 10){
        alert(` A resposta da sua conta, que é ${respostasoma}, ela é um número na casa das dezenas`)
    }
    else{
        alert(`A resposta da sua conta, que é ${respostasoma}, ela não é um numero na casa das dezenas!`)
    }
}

let subtraçãonumero1 = prompt("Olá, usuário! Digite um número para subtraí-lo a outro.")
let subtraçãonumero2 = prompt("Olá, usuário! Digite um número para subtraí-lo a outro.")
let respostasubtração = subtraçãonumero1 -subtraçãonumero2
function subtrai(respostasubtração){
    if(respostasubtração < 0){
        alert(`A resposta da sua conta, que é ${respostasubtração}, ela não é um número positivo`)
    }
    else{
    alert((`A resposta da sua conta, que é ${respostasubtração}, ela é um número positivo`)
}
}

function olamundo{
    console.log("Olá!, mundo!")
}

let insiraseunome = prompt("Digite  seu nome")
function saudação(insiraseunome){
    console(`Olá!, ${insiraseunome}, como você está?`)
}

//Tarefas: Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

//Criar uma função que recebe três números como parâmetros e retorna a média deles.

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo


//Este sofware calcula as médias dos alunos fornecidas:
let nota1 = toString(prompt("Insira a primeira nota aqui!"));
let nota2 = toString(prompt("Insira a segunda nota aqui!"));
let nota3 = toString(prompt("Insira a terceira nota aqui!"));
let nota4 = toString(prompt("Insira a quarta nota aqui!"))

function calculadorademedias(nota1, nota2, nota3, nota4){
    let mediadoaluno = (nota1 + nota2 + nota3 + nota4 /4);
    return mediadoaluno;
}
//Dado que a média é 5, então o aluno estaria aprovado?:
function Verificaraaprovação(mediadoaluno){
    return mediadoaluno >= 5 ? "Aprovado : "Reprovado";
}

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.