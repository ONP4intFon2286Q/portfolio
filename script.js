// Welcome animation
const reqAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
let count = 0;
let welco = document.querySelector(".wel");
welco.innerHTML = welco.innerHTML.split("").map((letter, idx) => `<div class="indi-let" style="transition-delay:${idx * 45}ms;">${letter}</div>`).join("");
let letters = document.querySelectorAll(".indi-let");

window.addEventListener('load', welcomAnimate);

function welcomAnimate() {  
    count++
    if (count > 0) {
        for (let i = 0; i < letters.length; i++) { letters[i].classList.add("moveA"); }
        count++;

        if (count > 400) {
            for (let i = 0; i < letters.length; i++) { letters[i].classList.add("moveB"); }
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

    requestAnimationFrame(welcomAnimate)
}


// Navbar and hamburger menu
const menuBtn = document.querySelector('.ham-con');
const navul = document.querySelector('.nav-ul');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  a.classList.toggle('open');
  b.classList.toggle('open');
  c.classList.toggle('open');
  navul.classList.toggle('open');
});


// About section start
const aboutTxt = document.querySelector(".about-txt");
const aboutImg = document.querySelector(".about-img");
const aboutCon = [aboutImg, aboutTxt]

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      // entry.target.classList.remove('show')
    }
  });
}

const options = {
  root: null,
  threshold: .5,
  rootMargin: "-200px 0px"
};

const observer = new IntersectionObserver(handleIntersection, options);

aboutCon.forEach(e => {
  observer.observe(e);
});

// About section end


// Skills
let langboxes = document.querySelectorAll(".lang");

for (let i = 0; i < langboxes.length; i++) {
  i % 2 == 0 ? langboxes[i].classList.add("lang-evens") : langboxes[i].classList.add("lang-odds");
}


// fancybox image gallery

const gallImages = document.querySelectorAll('.imageCon');

const filterBtn = document.querySelectorAll('.filterBtn');

const allBtn = document.querySelector('.allBtn');
const ladiesBtn = document.querySelector('.ladiesBtn');
const gentsBtn = document.querySelector('.gentsBtn');
const placesBtn = document.querySelector('.placesBtn');

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});



allBtn.addEventListener('click', event => {
  if (allBtn.classList.value.includes('selected')) {

  } else {
    allBtn.classList.add('selected')

    ladiesBtn.classList.remove('selected')
    gentsBtn.classList.remove('selected')
    placesBtn.classList.remove('selected')
  }

  gallImages.forEach(img => {
    if (img.classList.value.includes("all")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  })
})

ladiesBtn.addEventListener('click', event => {
  if (ladiesBtn.classList.value.includes('selected')) {

  } else {
    ladiesBtn.classList.add('selected')

    allBtn.classList.remove('selected')
    gentsBtn.classList.remove('selected')
    placesBtn.classList.remove('selected')
  }

  gallImages.forEach(img => {
    if (img.classList.value.includes("ladies")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  })
})

gentsBtn.addEventListener('click', event => {
  if (gentsBtn.classList.value.includes('selected')) {

  } else {
    gentsBtn.classList.add('selected')

    allBtn.classList.remove('selected')
    ladiesBtn.classList.remove('selected')
    placesBtn.classList.remove('selected')
  }

  gallImages.forEach(img => {
    if (img.classList.value.includes("gents")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  })
})

placesBtn.addEventListener('click', event => {
  if (placesBtn.classList.value.includes('selected')) {

  } else {
    placesBtn.classList.add('selected')

    allBtn.classList.remove('selected')
    ladiesBtn.classList.remove('selected')
    gentsBtn.classList.remove('selected')
  }

  gallImages.forEach(img => {
    if (img.classList.value.includes("places")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  })
})




// quote section slide-ins
const quote = document.querySelector(".quoteTxt");
const author = document.querySelector(".author");
const quoteSect = [quote, author];

function handleIntersectionQuotes(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showQ')
    } else {
      // entry.target.classList.remove('show')
    }
  });
}

const optionsQ = {
  root: null,
  threshold: .5,
  rootMargin: "-10px"
};

const observerQ = new IntersectionObserver(handleIntersectionQuotes, optionsQ);

quoteSect.forEach(e => {
  observerQ.observe(e);
});


// Waves footer
$('#wave').wavify({
  height: 100,
  bones: 5,
  amplitude: 35,
  color: 'var(--main-blue)',
  speed: .25
});


// Copyright footer
let copy = document.querySelector(".copy");
copy.innerHTML = `&copy; Portfolio Website ${new Date().getFullYear()}`;
