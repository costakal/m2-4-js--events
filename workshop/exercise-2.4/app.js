const main = document.querySelector("#main");
const buttons = [];

let countDown = 6;
let timerCountdown = document.createElement("h2");
let hasWon = false;

addEventListener("load", function () {
  const startButton = document.createElement("button");
  startButton.innerText = "Start";
  startButton.style.backgroundColor = "green";

  startButton.addEventListener("click", function () {
    startButton.style.display = "none";

    let timer = setInterval(function () {
      countDown = countDown - 1;
      timerCountdown.innerText = countDown;
      if (countDown < 1) {
        clearInterval(timer);
      }
    }, 1000);

    setTimeout(function () {
      if (hasWon === false) {
        let loser = document.createElement("h2");
        loser.innerText = "You Lose";
        main.appendChild(loser);
      }
    }, 6000);

    let randomNum = Math.floor((Math.random() + 1) * 5);

    for (num = 1; num <= randomNum; num++) {
      let button = document.createElement("button");
      button.id = `button-${num}`;
      button.innerText = `${num}`;
      button.style.backgroundColor = "red";

      let randomTop = Math.floor(Math.random() * 250);
      let randomLeft = Math.floor(Math.random() * 350);

      button.style.position = "absolute";
      button.style.top = randomTop + "px";
      button.style.left = randomLeft + "px";

      button.addEventListener("click", function () {
        button.style.backgroundColor = "green";
        buttons.push([button]);
        if (randomNum == buttons.length) {
          hasWon = true;
          let winnerText = document.createElement("h2");
          winnerText.innerText = "You Win!";
          main.appendChild(winnerText);
        }
      });
      main.appendChild(button);
    }
  });
  main.appendChild(startButton);
});

main.appendChild(timerCountdown);
