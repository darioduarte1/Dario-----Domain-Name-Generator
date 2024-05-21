/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Generator } from "webpack";

let firstWords = ["wonderful", "great", "fantastic", "incredible"];
let secondWords = ["car", "truck", "bike", "bus"];
let thirdWords = ["111", "333", "555", "777"];
let domainWords = ["com", "es", "pt", "fr"];

function generatorAllDomain() {
  for (let firstElement of firstWords) {
    for (let secondElement of secondWords) {
      for (let thirdElement of thirdWords) {
        for (let domainElement of domainWords) {
          console.log(
            firstElement + secondElement + thirdElement + "." + domainElement
          );
        }
      }
    }
  }
}

generatorAllDomain();

// Función para asignar el dominio al elemento HTML
function assignDomain() {
  const domainElement = document.querySelector("#domain");
  domainElement.innerHTML = generatorAllDomain(); // Asignar el dominio generado
}

// Asegurar que el código se ejecute después de que la página se cargue
document.addEventListener("DOMContentLoaded", assignDomain);
