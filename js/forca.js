let tentativas = 6;
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
const palavras = [
  (palavra001 = {
    nome: "IRLANDA",
    categoria: "PAÍS",
  }),
  (palavra002 = {
    nome: "BRASIL",
    categoria: "PAÍS",
  }),
  (palavra003 = {
    nome: "ITALIA",
    categoria: "PAÍS",
  }),
  (palavra004 = {
    nome: "MEXICO",
    categoria: "PAÍS",
  }),
  (palavra005 = {
    nome: "EUA",
    categoria: "PAÍS",
  }),
  (palavra006 = {
    nome: "NORUEGA",
    categoria: "PAÍS",
  }),
  (palavra007 = {
    nome: "INGLATERRA",
    categoria: "PAÍS",
  }),
  (palavra008 = {
    nome: "COLOMBIA",
    categoria: "PAÍS",
  }),
  (palavra009 = {
    nome: "EQUADOR",
    categoria: "PAÍS",
  }),
];
criarPalavraSecreta();
function criarPalavraSecreta() {
  let indexPalavra = parseInt(Math.random() * palavras.length);
  console.log(indexPalavra);

  palavraSecretaSorteada = palavras[indexPalavra].nome;
  palavraSecretaCategoria = palavras[indexPalavra].categoria;

  console.log(palavraSecretaSorteada);
  console.log(palavraSecretaCategoria);
}
mostraPalavraNaTela();
function mostraPalavraNaTela() {
  let categoria = document.getElementById("categoria");
  categoria.innerHTML = palavraSecretaCategoria;

  let palavraTela = document.getElementById("palavra-secreta");
  palavraTela.innerHTML = "";

  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (listaDinamica[i] == undefined) {
      listaDinamica[i] = "&nbsp;";
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    } else {
      palavraTela.innerHTML =
        palavraTela.innerHTML +
        "<div class='letras'>" +
        listaDinamica[i] +
        "</div>";
    }
  }
}

function verificaLetraEscolhida(letra) {
  document.getElementById("tecla-" + letra).disabled = true
  if (tentativas > 0) {
    mudarStyleLetra("tecla-" + letra);
    comparaListas(letra);
    mostraPalavraNaTela();
  }
}

function mudarStyleLetra(tecla) {
  document.getElementById(tecla).style.background = "#2A7AE4";
  document.getElementById(tecla).style.color = "#ffffff";
}

function comparaListas(letra) {
  let posicao = palavraSecretaSorteada.indexOf(letra);
  if (posicao < 0) {
    tentativas--;
    carregaImagemForca();
    if(tentativas == 0){
        alert("Você perdeu!, a palavra secreta era " + palavraSecretaSorteada)
    }
    //verificar se ainda tem tentativas
  } else {
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
      if (palavraSecretaSorteada[i] == letra) {
        listaDinamica[i] = letra;
      }
    }
  }

  let vitoria = true;
  for (let i = 0; i < palavraSecretaSorteada.length; i++) {
    if (palavraSecretaSorteada[i] != listaDinamica[i]) {
      vitoria = false;
    }
    
  }
  if (vitoria == true) {
    tentativas = 0;
    alert("Parabens, você venceu!!")
  }
  
}

function carregaImagemForca() {
  switch (tentativas) {
    case 5:
      document.getElementById("imagem").style.background =
        "url('img/forca01.png')";
      break;
    case 4:
      document.getElementById("imagem").style.background =
        "url('img/forca02.png')";
      break;
    case 3:
      document.getElementById("imagem").style.background =
        "url('img/forca03.png')";
      break;
    case 2:
      document.getElementById("imagem").style.background =
        "url('img/forca04.png')";
      break;
    case 1:
      document.getElementById("imagem").style.background =
        "url('img/forca05.png')";
      break;
    case 0:
      document.getElementById("imagem").style.background =
        "url('img/forca06.png')";
      break;
    default:
      document.getElementById("imagem").style.background =
        "url('/img/forca.png')";
      break;
  }
}

let btnReiniciar = document.querySelector("#btn-reiniciar")

btnReiniciar.addEventListener("click", function(){
  location.reload();
})

