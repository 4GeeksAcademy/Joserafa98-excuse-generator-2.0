/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function ExcuseGenerator() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while"
    ];
    function getElementArray(array) {
      let resultado = Math.floor(Math.random(-1) * array.length);
      return resultado;
    }

    let ExcuseGenerator =
      who[getElementArray(who)] +
      " " +
      action[getElementArray(action)] +
      " " +
      what[getElementArray(what)] +
      " " +
      when[getElementArray(when)];
    return ExcuseGenerator;
  }
  document.querySelector("#botonresultado").addEventListener("click", () => {
    let resultado = document.querySelector("#excuse");
    resultado.innerHTML = ExcuseGenerator();
  });
};
