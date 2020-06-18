// Exercise 1.1
// ------------

const clickMe = document.querySelector("body");
const game = document.querySelector("p");
const rules = document.createElement("h2");
let winner = false;
let loser = false;

rules.innerText = "Be a quicker clicker!";
clickMe.prepend(rules);

addEventListener("click", function () {
  if (loser === false) {
    game.innerText = "You Win";
    winner = true;
  }
});

setTimeout(function () {
  if (winner === false) {
    game.innerText = "You Lose";
    loser = true;
  }
}, 1000);
