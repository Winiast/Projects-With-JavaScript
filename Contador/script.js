// class Body {
//   constructor(subtrai, valor, soma) {
//     subtrai = this.subtrai;
//     valor = this.valor;
//     soma = this.soma;
//   }

//   AcrescentaValor(valorAtual) {
//     valorAtual = this.valor;
//     valorAtual += 1;
//   }

//   DecrescentaValor(valorAtual) {
//     valorAtual = this.valor;
//     valorAtual -= 1;
//   }

//   AlterarValorMostrado(ValorMostrado) {}
// }

const botaoSubtrai = document.getElementById("subtrai");
const botaoSoma = document.getElementById("soma");
const mostraValor = document.getElementById("valor");

const foto1 = '<img id="image" src="./Screenshot 2021-12-17 120619.png" />';

let valorAtual = 0;

botaoSubtrai.addEventListener("click", function () {
  valorAtual -= 1;
  //   mostraValor.innerHTML = foto1;
  mostraValor.innerText = valorAtual;
  //   console.log(valorAtual);
});

botaoSoma.addEventListener("click", function () {
  valorAtual += 1;
  mostraValor.innerText = valorAtual;

  //   console.log(valorAtual);
});
