// Navbar and hamburger menu
const menuBtn = document.querySelector(".ham-con");
const navul = document.querySelector(".nav-ul");
const a = document.querySelector(".a");
const b = document.querySelector(".b");
const c = document.querySelector(".c");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  a.classList.toggle("open");
  b.classList.toggle("open");
  c.classList.toggle("open");
  navul.classList.toggle("open");
});
