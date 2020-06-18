const balloon = document.querySelector("#balloon");
// declaring variables/settings
let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`;
const RATE = 5;
const LIMIT = 75;
// listen on the up and down arrows
// if balloon is bigger than x, BOOM
const handleKeydown = function (event) {
  const keyPress = event.key;
  if (keyPress === "ArrowUp") {
    balloonSize += 10;
    balloon.style.fontSize = `${balloonSize}px`;
  }
  if (keyPress === "ArrowDown") {
    balloonSize -= 10;
    balloon.style.fontSize = `${balloonSize}px`;
  }
  if (balloonSize > LIMIT) {
    balloon.innerText = ":boom:";
    const explosion = setInterval(function () {
      balloonSize += 50;
      balloon.style.fontSize = `${balloonSize}px`;
      if (balloonSize > 1000) {
        balloon.style.opacity = 0;
        clearInterval(explosion);
      }
    }, 20);
    document.removeEventListener("keydown", handleKeydown);
  }
};
document.addEventListener("keydown", handleKeydown);
