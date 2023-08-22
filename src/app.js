/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "My"];
  let subject = ["cat", "sister", "neighbor", "driver", "kid"];
  let action = ["took my", "broke my", "stole my", "bit my", "forbid me to"];
  let possession = ["papers", "homework", "keys", "clothes"];
  let where = ["in my house", "on the street", "in my car"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
