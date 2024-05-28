/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let firstWords = ["wonderful", "great", "fantastic", "incredible"];
let secondWords = ["car", "truck", "bike", "bus"];
let thirdWords = ["111", "333", "555", "777"];
let domainWords = ["com", "es", "pt", "fr"];

function generatorAllDomain() {
  let myArray = [];

  for (let firstElement of firstWords) {
    for (let secondElement of secondWords) {
      for (let thirdElement of thirdWords) {
        for (let domainElement of domainWords) {
          myArray.push(
            " " +
              firstElement +
              secondElement +
              thirdElement +
              "." +
              domainElement
          );
        }
      }
    }
  }
  return myArray;
}
generatorAllDomain();

// Funcao para o dominio html
function assignDomain() {
  const domainElement = document.querySelector("#domain");
  domainElement.innerHTML = generatorAllDomain(); // introduzir o dominio gerado
}

// Asegurar que o codigo se execute depois da pagina carregada
document.addEventListener("DOMContentLoaded", assignDomain);
