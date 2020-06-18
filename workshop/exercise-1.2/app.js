// Exercise 1.2
// ------------
const game = document.querySelector("body");
const result = document.querySelector("#result");
const time = document.querySelector("#time");

let winner = false;
let loser = false;
let randomNumber = Math.floor(Math.random() * 5000);
let randomNumberView = Math.floor(randomNumber / 1000);
time.innerText = randomNumberView;

addEventListener("click", function () {
  if (loser === false) {
    result.innerText = "You Win";
    winner = true;
  }
});

setTimeout(function () {
  if (winner === false) {
    result.innerText = "You Lose";
    loser = true;
  }
}, randomNumber);
