const main = document.querySelector("#main");
const buttons = [];

for (num = 1; num <= 20; num++) {
  let button = document.createElement("button");
  buttons.push([button]);
  button.id = `button-${num}`;
  button.innerText = `${num}`;
  button.style.backgroundColor = "red";
  button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
  });
  main.appendChild(button);
}
