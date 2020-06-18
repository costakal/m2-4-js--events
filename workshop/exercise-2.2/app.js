const main = document.querySelector("#main");
const buttons = [];

for (num = 1; num <= 20; num++) {
  let button = document.createElement("button");
  buttons.push([button]);
  button.id = `button-${num}`;
  button.innerText = `${num}`;
  button.style.backgroundColor = "red";
  let change = button.addEventListener("click", function () {
    if (button.style.backgroundColor === "green") {
      button.style.backgroundColor = "red";
    } else if (button.style.backgroundColor === "red") {
      button.style.backgroundColor = "green";
    }
  });
  main.appendChild(button);
}
