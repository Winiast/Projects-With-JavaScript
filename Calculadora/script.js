const valorDaTela = document.getElementById("valor");
const botaoSoma = document.getElementById("soma");
const botaoSubtrair = document.getElementById("menos");
const botaoDividir = document.getElementById("dividir");
const botaoMultiplicar = document.getElementById("multiplicar");
const botaoIgual = document.getElementById("igual");

// DOM dos numeros do 0 ao 9

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

//  Declaração das Variaveis

let valorMostrado = "";
let numerosVisual = "";
let valores = [];
let local;
let trocaEntreOperacoes;

// Declaração dos Botoes do 0 ao 9

valor1.addEventListener("click", () => {
  valorMostrado += valor1.textContent;
  numerosVisual += valor1.textContent;
  valorDaTela.innerText = numerosVisual;
});

valor2.addEventListener("click", () => {
  valorMostrado += valor2.textContent;
  numerosVisual += valor2.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor3.addEventListener("click", () => {
  valorMostrado += valor3.textContent;
  numerosVisual += valor3.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor4.addEventListener("click", () => {
  valorMostrado += valor4.textContent;
  numerosVisual += valor4.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor5.addEventListener("click", () => {
  valorMostrado += valor5.textContent;
  numerosVisual += valor5.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor6.addEventListener("click", () => {
  valorMostrado += valor6.textContent;
  numerosVisual += valor6.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor7.addEventListener("click", () => {
  valorMostrado += valor7.textContent;
  numerosVisual += valor7.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor8.addEventListener("click", () => {
  valorMostrado += valor8.textContent;
  numerosVisual += valor8.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor9.addEventListener("click", () => {
  valorMostrado += valor9.textContent;
  numerosVisual += valor9.textContent;

  valorDaTela.innerText = numerosVisual;
});

valor0.addEventListener("click", () => {
  valorMostrado += valor0.textContent;
  numerosVisual += valor0.textContent;
  valorDaTela.innerText = numerosVisual;
});

botaoSoma.addEventListener("click", () => {
  valorDaTela.innerText = soma();
});

botaoSubtrair.addEventListener("click", () => {
  valorDaTela.innerText = subtracao();
});

botaoDividir.addEventListener("click", () => {
  valorDaTela.innerText = divisao();
});

// Botao Igual

botaoIgual.addEventListener("click", () => {
  switch (trocaEntreOperacoes) {
    case 1:
      valorDaTela.innerText = soma(1);
      break;
    case 2:
      valorDaTela.innerText = subtracao(1);
    case 3:
      valorDaTela.innerText = divisao(i);
  }
});

// Botao Soma

function soma(flag) {
  trocaEntreOperacoes = 1;
  transformarEmInteiro();
  if (valores.length == 2) {
    let somados = valores[0] + valores[1];
    valores = [];
    valores.push(somados);
    if (flag == 1) {
      numerosVisual = somados;
    } else {
      numerosVisual = somados + " + ";
    }
  } else {
    if (flag == 1) {
      numerosVisual = somados;
    } else {
      numerosVisual += " + ";
    }
  }
  return numerosVisual;
}

// Botao Subtração

function subtracao(flag) {
  trocaEntreOperacoes = 2;

  transformarEmInteiro();
  if (valores.length == 2) {
    let subtraidos = valores[0] - valores[1];
    valores = [];
    valores.push(subtraidos);
    if (flag == 1) {
      numerosVisual = subtraidos;
    } else {
      numerosVisual = subtraidos + " - ";
    }
  } else {
    if (flag == 1) {
      numerosVisual = subtraidos;
    } else {
      numerosVisual += " - ";
    }
  }
  return numerosVisual;
}

function divisao(flag) {
  if (valores.length == 2) {
    let dividido = valores[0] / valores[1];
    valores = [];
    valores.push(dividido);
    if (flag == 1) {
      numerosVisual = dividido;
    } else {
      numerosVisual = dividido + " / ";
    }
  } else {
    if (flag == 1) {
      d;
      numerosVisual = dividido;
    } else {
      numerosVisual += " / ";
    }
  }
  return numerosVisual;
}

function multiplicacao(flag) {}

function transformarEmInteiro() {
  local = parseInt(valorMostrado);
  valores.push(local);
  valorMostrado = "";
}
