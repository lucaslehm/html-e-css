//Botoes "Função"
const botaoApaga = document.querySelector('#btn-apaga')
const botaoParenteseEsq = document.querySelector('#btn-parentese-esq')
const botaoParenteseDir = document.querySelector('#btn-parentese-dir')
const botaoDividir = document.querySelector('#btn-dividir')
const botaoSomar = document.querySelector('#btn-somar')
const botaoSubtrair = document.querySelector('#btn-subtrair')
const botaoMultiplicar = document.querySelector('#btn-multiplicar')
const botaoIgual = document.querySelector('#btn-igual')

// Botoes numericos
const botaoUm = document.querySelector('#btn-um')
const botaoDois = document.querySelector('#btn-dois')
const botaoTres = document.querySelector('#btn-tres')
const botaoQuatro = document.querySelector('#btn-quatro')
const botaoCinco = document.querySelector('#btn-cinco')
const botaoSeis = document.querySelector('#btn-seis')
const botaoSete = document.querySelector('#btn-sete')
const botaoOito = document.querySelector('#btn-oito')
const botaoNove = document.querySelector('#btn-nove')
const botaoZero = document.querySelector('#btn-zero')

//Display 
const display = document.querySelector('.conteudo-display')
const spoilerResultado = document.querySelector('.spoiler-resultado')

//Variavel de controle para o display

let conta

document.addEventListener('click', function(e) {
    const el = e.target
    if (el.classList.contains('btn-calculadora')) {
        escreveNoDisplay(el.id)
    }
})

function escreveNoDisplay(botao) {

    if (botao === 'btn-apaga') {
        conta = String(conta)
        conta[conta.length] = 'A'
        display.innerHTML = conta
    } else {
        const btn = document.querySelector('#'+ botao)
        const valor = btn.innerHTML
        conta = Number(btn.innerHTML)
        display.innerHTML += conta
    }

}