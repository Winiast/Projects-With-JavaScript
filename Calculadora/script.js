const valorDaTela = document.getElementById("valor");
const botaoSoma = document.getElementById("soma");
const botaoIgual = document.getElementById("igual");

const valor1 = document.querySelector(".valor-1");
const valor2 = document.querySelector(".valor-2");
const valor3 = document.querySelector(".valor-3");
const valor4 = document.querySelector(".valor-4");
const valor5 = document.querySelector(".valor-5");
const valor6 = document.querySelector(".valor-6");
const valor7 = document.querySelector(".valor-7");
const valor8 = document.querySelector(".valor-8");
const valor9 = document.querySelector(".valor-9");
const valor0 = document.querySelector(".valor-0");

let valorMostrado = "";
let numerosVisual = "";
let valores = [];

valor1.addEventListener("click", () => {
  valorMostrado += valor1.textContent;
  numerosVisual += valor1.textContent;
  valorDaTela.innerText = valorMostrado;
});

valor2.addEventListener("click", () => {
  valorMostrado += valor2.textContent;
  numerosVisual += valor2.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor3.addEventListener("click", () => {
  valorMostrado += valor3.textContent;
  numerosVisual += valor3.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor4.addEventListener("click", () => {
  valorMostrado += valor4.textContent;
  numerosVisual += valor4.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor5.addEventListener("click", () => {
  valorMostrado += valor5.textContent;
  numerosVisual += valor5.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor6.addEventListener("click", () => {
  valorMostrado += valor6.textContent;
  numerosVisual += valor6.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor7.addEventListener("click", () => {
  valorMostrado += valor7.textContent;
  numerosVisual += valor7.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor8.addEventListener("click", () => {
  valorMostrado += valor8.textContent;
  numerosVisual += valor8.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor9.addEventListener("click", () => {
  valorMostrado += valor9.textContent;
  numerosVisual += valor9.textContent;

  valorDaTela.innerText = valorMostrado;
});

valor0.addEventListener("click", () => {
  valorMostrado += valor0.textContent;
  numerosVisual += valor0.textContent;
  valorDaTela.innerText = valorMostrado;
});

botaoSoma.addEventListener("click", () => {
  let local = parseInt(valorMostrado);
  valores.push(local);
  console.log(local);
  numerosVisual += " + ";
  valorDaTela.innerText = valorMostrado;
  if (valores.length == 2) {
    console.log(soma(valores[0], valores[1]));
    soma(valores[0] + valores[1]);
    valorMostrado = "" + soma(valores[0], valores[1]);
    valores = [];
    valores.push(soma(valores[0], valores[1]));
  }
  valo;
});

botaoIgual.addEventListener("click", () => {});

function soma(i, j) {
  return i + j;
}
