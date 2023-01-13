let img = window.document.getElementById('imagem')
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "No ep 'Melhor Casal do Mundo', quem vai morar no apt do Barney e dorme com ele?",
    alternativaA : "Marshall",
    alternativaB : "Robin",
    alternativaC : "Ted",
    alternativaD : "Lily",
    correta      : "Lily",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual a profissão que Ted falou para Zoey quando conheceu ela?",
    alternativaA : "Médico",
    alternativaB : "Veterinário",
    alternativaC : "Arquiteto",
    alternativaD : "Advogado",
    correta      : "Veterinário",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A casa da Lily virou qual estabelecimento?",
    alternativaA : "Restaurante chinês",
    alternativaB : "Restaurante japonês",
    alternativaC : "Resturante tailandês",
    alternativaD : "Restaurante mexicano",
    correta      : "Restaurante chinês",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual o famoso da foto autografada da briga de Ted e Willyan Zabka?",
    alternativaA : "Wayne Gretzky",
    alternativaB : "Andre De Grasse",
    alternativaC : "Derek Drouin",
    alternativaD : "Damian Thorne",
    correta      : "Wayne Gretzky",

}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Quem ganhou a corrida do metrô?",
    alternativaA : "Ted",
    alternativaB : "Barney",
    alternativaC : "Robin",
    alternativaD : "Marshall",
    correta      : "Robin?",

}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual a senha de acesso ao resultado do teste de advogado de Marshall?",
    alternativaA : "6883",
    alternativaB : "3228",
    alternativaC : "7883",
    alternativaD : "8663",
    correta      : "8663",

}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual a fantasia do Ted, quando ele conheceu a abóbora safada?",
    alternativaA : "Jornal",
    alternativaB : "Urna",
    alternativaC : "Panfleto",
    alternativaD : "Cédula de votação",
    correta      : "Cédula de votação",

}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Qual é o nome da mãe do Barney?",
    alternativaA : "Nellie",
    alternativaB : "Loretta",
    alternativaC : "Jeannie",
    alternativaD : "Bertha",
    correta      : "Loretta",

}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Qual é o nome da irmã do Ted?",
    alternativaA : "Jessie",
    alternativaB : "Heather",
    alternativaC : "Anne",
    alternativaD : "Nancy",
    correta      : "Heather",

}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Quantas vezes Ted usou as botas de caubói vermelha?",
    alternativaA : "4 vezes",
    alternativaB : "3 vezes",
    alternativaC : "5 vezes",
    alternativaD : "2 vezes",
    correta      : "4 vezes",

} 

const q11 = {
    numQuestao   : 11,
    pergunta     : "Em que dia a série foi lançada e encerrada?",
    alternativaA : "15/10/2005x29/04/2014",
    alternativaB : "19/09/2005x31/03/2014",
    alternativaC : "22/10/2005x26/04/2014",
    alternativaD : "24/09/2005x27/03/2014",
    correta      : "19/09/2005x31/03/2014",

} 

const q12 = {
    numQuestao   : 12,
    pergunta     : "Em que ep o pai do Marshall morre?",
    alternativaA : "6x11",
    alternativaB : "6x12",
    alternativaC : "6x13",
    alternativaD : "6x14",
    correta      : "6x13",

} 

const q13 = {
    numQuestao   : 13,
    pergunta     : "Qual era o nome da blá blá? Uma das namoradas do Ted",
    alternativaA : "Carol",
    alternativaB : "Charlie",
    alternativaC : "Christine",
    alternativaD : "Celia",
    correta      : "Carol",

} 

const q14 = {
    numQuestao   : 14,
    pergunta     : "Quantas namoradas o Ted teve?",
    alternativaA : "6",
    alternativaB : "7",
    alternativaC : "8",
    alternativaD : "9",
    correta      : "8",

} 

const q15 = {
    numQuestao   : 15,
    pergunta     : "Quantos famosos apareceram na série?",
    alternativaA : "20",
    alternativaB : "12",
    alternativaC : "18",
    alternativaD : "15",
    correta      : "15",

} 


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }


    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
        proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    // img.src = 'fotomarvel.jpg'

    // a.textContent = ""
    // b.textContent = ""
    // c.textContent = ""
    // d.textContent = ""

    // a.setAttribute('value', '0')
    // b.setAttribute('value', '0')
    // c.setAttribute('value', '0')
    // d.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}

