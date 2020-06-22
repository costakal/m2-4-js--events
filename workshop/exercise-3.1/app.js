const time = document.querySelector("#main");
const now = new Date();

const clock = document.createElement("p");
clock.innerText = now;

time.appendChild(clock);

// setInterval(function(){}, 1000)
