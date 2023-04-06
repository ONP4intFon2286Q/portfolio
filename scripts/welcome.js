// Welcome animation
const reqAnimFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
let count = 0;
let welco = document.querySelector(".wel");
welco.innerHTML = welco.innerHTML
  .split("")
  .map(
    (letter, idx) =>
      `<div class="indi-let" style="transition-delay:${
        idx * 45
      }ms;">${letter}</div>`
  )
  .join("");
let letters = document.querySelectorAll(".indi-let");

window.addEventListener("load", welcomAnimate);

function welcomAnimate() {
  count++;
  if (count > 0) {
    for (let i = 0; i < letters.length; i++) {
      letters[i].classList.add("moveA");
    }
    count++;

    if (count > 400) {
      for (let i = 0; i < letters.length; i++) {
        letters[i].classList.add("moveB");
      }
      count++;

      if (count > 600) {
        for (let i = 0; i < letters.length; i++) {
          letters[i].classList.remove("moveA");
          letters[i].classList.remove("moveB");
        }
        count = 0;
      }
    }
  }

  requestAnimationFrame(welcomAnimate);
}
