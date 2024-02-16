const pontuacaoGeral = document.querySelector('.pontuacao-geral-texto')

const reacaoTexto = document.querySelector('.reacao-texto')
const memoriaTexto = document.querySelector('.memoria-texto')
const verbalTexto = document.querySelector('.verbal-texto')
const visualTexto = document.querySelector('.visual-texto')

const pontuacaoReacao = document.querySelector('#ID-pontuacao-reacao')
const pontuacaoMemoria = document.querySelector('#ID-pontuacao-memoria')
const pontuacaoVerbal = document.querySelector('#ID-pontuacao-verbal')
const pontuacaoVisual = document.querySelector('#ID-pontuacao-visual')

let somaPontuacoes = 0

fetch('data.json').then((response) => {
    response.json().then((dados) => {
        dados.forEach(element => {
            switch(element.category) {
                case 'Reação':
                    reacaoTexto.innerHTML = element.category
                    pontuacaoReacao.innerHTML = element.score
                    somaPontuacoes += element.score
                    break
                case 'Memória':
                    memoriaTexto.innerHTML = element.category
                    pontuacaoMemoria.innerHTML = element.score
                    somaPontuacoes += element.score
                    break
                case 'Verbal':
                    verbalTexto.innerHTML = element.category
                    pontuacaoVerbal.innerHTML = element.score
                    somaPontuacoes += element.score
                    break
                case 'Visual':
                    visualTexto.innerHTML = element.category
                    pontuacaoVisual.innerHTML = element.score
                    somaPontuacoes += element.score
                    break
                default:
                        console.error('Categoria desconhecida:', element.category);
            }
        })

        const mediaPontuacoes = Math.ceil(somaPontuacoes / 4)
        pontuacaoGeral.innerHTML = mediaPontuacoes
    })
}).catch(erro => alert('Erro ao carregar o arquivo JSON:', erro))