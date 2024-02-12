function global() {

    // Seletores dos elementos clicaveis
    const primeiraPergunta = document.querySelector('#pergunta_1')
    const botaoPrimeiraPergunta = document.querySelector('#botao_pergunta_1')
    const plusPrimeiroBotao = document.querySelector('#primeiro_botao')
    const respostaPrimeiraPergunta = document.querySelector('#resposta_pergunta_1')

    const segundaPergunta = document.querySelector('#pergunta_2')
    const botaoSegundaPergunta = document.querySelector('#botao_pergunta_2')
    const plusSegundaBotao = document.querySelector('#segundo_botao')
    const respostaSegundaPergunta = document.querySelector('#resposta_pergunta_2')

    const terceiraPergunta = document.querySelector('#pergunta_3')
    const botaoTerceiraPergunta = document.querySelector('#botao_pergunta_3')
    const plusTerceiraBotao = document.querySelector('#terceiro_botao')
    const respostaTerceiraPergunta = document.querySelector('#resposta_pergunta_3')

    const quartaPergunta = document.querySelector('#pergunta_4')
    const botaoQuartaPergunta = document.querySelector('#botao_pergunta_4')
    const plusQuartaBotao = document.querySelector('#quarto_botao')
    const respostaQuartaPergunta = document.querySelector('#resposta_pergunta_4')

    

    function responderPergunta(pergunta, resposta, plus, botao) {
    function toggleClasses() {
        exibirResposta(resposta, plus, botao);
        const perguntaPai = pergunta.closest('.pergunta');
        const botaoDentroDaPergunta = perguntaPai.querySelector('.icone-para-abrir i');
        botaoDentroDaPergunta.classList.toggle('aberto');
    }

    pergunta.addEventListener('click', toggleClasses);
    botao.addEventListener('click', toggleClasses);
}


    responderPergunta(primeiraPergunta,respostaPrimeiraPergunta,plusPrimeiroBotao,botaoPrimeiraPergunta)

    responderPergunta(segundaPergunta,respostaSegundaPergunta,plusSegundaBotao,botaoSegundaPergunta)

    responderPergunta(terceiraPergunta,respostaTerceiraPergunta,plusTerceiraBotao,botaoTerceiraPergunta)
    
    responderPergunta(quartaPergunta,respostaQuartaPergunta,plusQuartaBotao,botaoQuartaPergunta)

    function exibirResposta(resposta, plus, botao) {
        resposta.style.display === 'none' ? resposta.style.display = 'block' : resposta.style.display = 'none'

        plus.classList.contains('bi-plus') ? plus.classList.replace('bi-plus' , 'bi-dash') : plus.classList.replace('bi-dash' , 'bi-plus')

        botao.classList.toggle('aberto')
    }

}

global()