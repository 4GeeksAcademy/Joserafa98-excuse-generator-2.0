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

    let whoIndex = Mat.floor(Math.random(-1) * who.length);
    let actionIndex = Mat.floor(Math.random(-1) * action.length);
    let whatIndex = Mat.floor(Math.random(-1) * what.length);
    let whenIndex = Mat.floor(Math.random(-1) * when.length);

    let ExcuseGenerator =
      who[whoIndex] + action[actionIndex] + what[whatIndex] + when[whenIndex];
    return ExcuseGenerator;
  }
  console.log("Hello Rigo from the console!");
};
