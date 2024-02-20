let listaDeNumeroSorteado = [];
let limiteDeNumero = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo Número Secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um Número de 1 a 10";

function exibirTestoNaTela(tag,  texto) {
let campo = document.querySelector(tag);
campo.innerHTML = texto;
    responsivelVoice.speak(texto, 'Brazilian portuguese female', {rate:1.2});

}

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTestoNaTela("h1", "Jogo Número Secreto");
    exibirTestoNaTela("p", "Escolha um Número de 1 a 10.");
}



function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTestoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o Número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTestoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
        if (chute > numeroSecreto) {
            exibirTestoNaTela("p","O número secreto é menor.");
        } else{
            exibirTestoNaTela("p", "O número secreto é maior.");
        }
                 //tentativas : tentativa +1;
        tentativas++;
        limparCampo();
    }

}

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() * limiteDeNumero + 1);
 let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;

    if (quantidadeDeElementosNaLista == limiteDeNumero) {
        listaDeNumeroSorteado = [];
    }
    if (listaDeNumeroSorteado.includes (numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
document.getElementById("reiniciar").setAttribute("disabled", true);
}
