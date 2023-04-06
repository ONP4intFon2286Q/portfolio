// quote section slide-ins
const quote = document.querySelector(".quoteTxt");
const author = document.querySelector(".author");
const quoteSect = [quote, author];

function handleIntersectionQuotes(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showQ");
    } else {
      // entry.target.classList.remove('show')
    }
  });
}

const optionsQ = {
  root: null,
  threshold: 0.5,
  rootMargin: "-10px",
};

const observerQ = new IntersectionObserver(handleIntersectionQuotes, optionsQ);

quoteSect.forEach((e) => {
  observerQ.observe(e);
});

// Waves footer
$("#wave").wavify({
  height: 100,
  bones: 5,
  amplitude: 35,
  color: "var(--main-blue)",
  speed: 0.25,
});

// Copyright footer
let copy = document.querySelector(".copy");
copy.innerHTML = `&copy; Portfolio Website ${new Date().getFullYear()}`;
