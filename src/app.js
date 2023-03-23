/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const excuseElement = document.getElementById("excuse");

const who = ["The dog", "My granma", "His turtle", "My bird"];
const what = ["eat", "pissed", "crushed", "broked"];
const when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function generateExcuse() {
  let randomWhoIndex = Math.floor(Math.random() * who.length);
  let randomWhatIndex = Math.floor(Math.random() * what.length);
  let randomWhenIndex = Math.floor(Math.random() * when.length);

  const excuse = `${who[randomWhoIndex]} ${what[randomWhatIndex]} ${when[randomWhenIndex]}`;

  return excuse;
}

excuseElement.innerHTML = generateExcuse();
