const buttonToggle = document.querySelector(".toggle");
const button = document.querySelector("button");
let setId = document.querySelector("#off");
const h1 = document.querySelector(".text-h1");
const buttonBalada = document.querySelector(".balada");

// if (setId.value == "off") {

let arrayCores = [
  "Red",
  "Gray",
  "Black",
  "Purple",
  "Yellow",
  "Pink",
  "Green",
  "Blue",
];
let i = 0;
let container = document.querySelector(".container");

button.addEventListener("click", () => {
  if (i == arrayCores.length) {
    i = 0;
    container.style.backgroundColor = "white";
    h1.innerText = "Background Color: White";
    container.style.color = "black";
  } else {
    container.style.backgroundColor = arrayCores[i];
    h1.innerText = "Background Color: " + arrayCores[i];
    container.style.color = "white";
    i++;
  }
});

function balada() {
  if (i == arrayCores.length) {
    i = 0;
    container.style.backgroundColor = "white";
    h1.innerText = "Background Color: White";
    container.style.color = "black";
  } else {
    container.style.backgroundColor = arrayCores[i];
    h1.innerText = "Background Color: " + arrayCores[i];
    container.style.color = "white";
    i++;
  }
}
// } else if (setId == "on") {
//   buttonToggle.addEventListener("click", () => {
//     let container = document.querySelector(".container");
//     container.style.backgroundColor = "white";
//     container.style.color = "black";
//     buttonToggle.value = "off";
//     setId.setAttribute("id", "off");
//   });
// }

// console.log(setId.value);
