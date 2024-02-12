function global() {

    // Seletores dos elementos clicaveis
    const primeiraPergunta = document.querySelector('#pergunta_1')
    const botaoPrimeiraPergunta = document.querySelector('#botao_pergunta_1')

    primeiraPergunta.addEventListener('click', function (e) {
        exibirRespostaPrimeiraPergunta()
    })

    botaoPrimeiraPergunta.addEventListener('click', function (e) {
        exibirRespostaPrimeiraPergunta()
    })

    // Funções das respostas
    function  exibirRespostaPrimeiraPergunta() {
        
    }

    function esconderRespostaPrimeiraPergunta() {
        
    }

}

global()