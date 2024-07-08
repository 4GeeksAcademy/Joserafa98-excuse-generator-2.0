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

    let whoIndex = Math.floor(Math.random(-1) * who.length);
    let actionIndex = Math.floor(Math.random(-1) * action.length);
    let whatIndex = Math.floor(Math.random(-1) * what.length);
    let whenIndex = Math.floor(Math.random(-1) * when.length);

    let ExcuseGenerator =
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex];
    return ExcuseGenerator;
  }
  document.querySelector("#botonresultado").addEventListener("click", () => {
    let resultado = document.querySelector("#excuse");
    resultado.innerHTML = ExcuseGenerator();
  });
  console.log();
};
