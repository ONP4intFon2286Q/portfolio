// Navbar Start

const butHoriz = document.querySelector(".but-horiz");
const hamCon = document.querySelector(".ham-bar-con");
const navButtons = document.querySelectorAll('.navi-li');
const socialButtons = document.querySelectorAll('.social-links');
const aBar = document.querySelector(".a-bar");
const bBar = document.querySelector(".b-bar");
const cBar = document.querySelector(".c-bar");

window.addEventListener('load', function(e) {
    for(let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.toggle("shown")
    }
    for(let i = 0; i < socialButtons.length; i++) {
        socialButtons[i].classList.toggle("shown")
    }
});

hamCon.addEventListener("click", () => {
    for(let i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.toggle("hidden")
    }
    for(let i = 0; i < socialButtons.length; i++) {
        socialButtons[i].classList.toggle("hidden")
    }

    butHoriz.classList.toggle("hidden")
    butHoriz.classList.toggle("shown")

    aBar.classList.toggle("aBarActive");
    bBar.classList.toggle("bBarActive");
    cBar.classList.toggle("cBarActive");

});

// Navbar End



// Section 01 Start -- Mini-scroll-bar

const sec1 = document.getElementById("section1");
// Calculates top of page relative to scroll
const pageTop = sec1.getBoundingClientRect().top + window.scrollY;
console.log("PAGE TOP: ", pageTop)

const scrollBox = document.querySelectorAll(".scroll-box");

// Calculates the length of the page relative to window size. window.innerHeight is the relative height of the user's page. 
let pageLenSubWinHeight = document.querySelector("body").getBoundingClientRect().height - window.innerHeight;

const miniBarWidth = document.querySelector(".scroll-box").getBoundingClientRect().height;
const miniLineHeight = document.querySelector(".scroll-line").getBoundingClientRect().height;

window.addEventListener('scroll', function(e) {

    // Entire <html> element to detect for resizing
    const htmlObs = document.documentElement;

    // Recalculate mini-scroll bar when page is resized
    const obs = new ResizeObserver(entries => {
        pageLenSubWinHeight = document.querySelector("body").getBoundingClientRect().height - window.innerHeight;
    });
    obs.observe(htmlObs)

    // Scale function calculates the position of the scroll bar in relation to the page height.
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    // Adding scroll to mini-bar's translation position
    scrollBox[0].style.transform = `translate(${-1 * scale(window.scrollY, pageTop, pageLenSubWinHeight, 0, miniLineHeight - miniBarWidth)}px, 0px)`;
    scrollBox[1].style.transform = `translate(${-1 * scale(window.scrollY, pageTop, pageLenSubWinHeight, 0, miniLineHeight - miniBarWidth)}px, 0px)`;
    scrollBox[2].style.transform = `translate(${-1 * scale(window.scrollY, pageTop, pageLenSubWinHeight, 0, miniLineHeight - miniBarWidth)}px, 0px)`;
})

// Section 1 END



// Section 2 Start

const imgsSec2 = document.querySelectorAll(".car-c-img")
const imgSections = document.querySelectorAll(".sect2-work")

// Observer car blocks Fade In
const fadeOptions = {
    root: null,
    threshold: .7,
    rootMargin: "0px" 
};

const observerFade = new IntersectionObserver(function(entries, obsever){
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
    entry.target.classList.add("fadeIn");
    observerFade.unobserve(entry.target);
})
}, fadeOptions);

imgSections.forEach(i => {
    observerFade.observe(i);
})


// Parallax scroll car images
window.addEventListener('scroll', function(e) {
    var scrolled = sec1.getBoundingClientRect().bottom.toFixed();

    // Parallax
    var rate = scrolled * .12;

    var rateA = rate - 350;
    imgsSec2[0].style.transform = `translate3d(0px, ${rateA}px, 0px) scale(1)`;
    
    var rateB = rate - 200;
    imgsSec2[1].style.transform = `translate3d(0px, ${rateB}px, 0px) scale(1)`;

    var rateC = rate + 200;
    imgsSec2[2].style.transform = `translate3d(-250px, ${rateC}px, 0px) scale(2.2)`;
    
    var rateD = rate - 200;
    imgsSec2[3].style.transform = `translate3d(0px, ${rateD}px, 0px) scale(1)`;

    var rateE = rate + 150;
    imgsSec2[4].style.transform = `translate3d(-170px, ${rateE}px, 0px) scale(2.2)`;
})

// Section 2 END


