// About section start
const aboutTxt = document.querySelector(".about-txt");
const aboutImg = document.querySelector(".about-img");
const aboutCon = [aboutImg, aboutTxt];

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      // entry.target.classList.remove('show')
    }
  });
}

const options = {
  root: null,
  threshold: 0.5,
  rootMargin: "-200px 0px",
};

const observer = new IntersectionObserver(handleIntersection, options);

aboutCon.forEach((e) => {
  observer.observe(e);
});
