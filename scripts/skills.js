const skillsInfo = [
  // HMTL
  {
    icon: "fab fa-brands fa-html5 fa-3x",
    desc: "HTML",
    links: {
      site: null,
      github:
        "https://github.com/ONP4intFon2286Q/portfolio/blob/main/index.html",
    },
  },

  // CSS
  {
    icon: "fab fa-brands fa-css3-alt fa-3x",
    desc: "CSS",
    links: {
      site: "https://digitalpixelwizz.com/automotive/",
      github: "https://github.com/ONP4intFon2286Q/portfolio/tree/main/css",
    },
  },

  // JavaScript
  {
    icon: "fab fa-js fa-3x",
    desc: "JavaScript",
    links: {
      site: "https://digitalpixelwizz.com/automotive/",
      github: "https://github.com/ONP4intFon2286Q/portfolio/tree/main/scripts",
    },
  },

  // React.js
  {
    icon: "fab fa-react fa-3x",
    desc: "React.js",
    links: {
      site: "https://reat-toms-store.netlify.app/",
      github: "https://github.com/ONP4intFon2286Q/react-toms-store",
    },
  },

  // Python
  {
    icon: "fab fa-python fa-3x",
    desc: "Python",
    links: {
      site: null,
      github: "https://github.com/ONP4intFon2286Q/BookApp/blob/main/BookApp.py",
    },
  },
];

const softCon = document.querySelector(".soft-con");
let counter = 1;
let evensOdds = "lang-odds";

skillsInfo.map((e) => {
  // boxes scale and rotation classes
  counter % 2 === 0 ? (evensOdds = "lang-evens") : (evensOdds = "lang-odds");
  counter++;

  //   site and github links
  const siteHTML = `<a href=${e.links.site} target='_blank' rel='noopener noreferrer' class='sites-link' >site</a>`;
  const githubHTML = `<a href=${e.links.github} target='_blank' rel='noopener noreferrer' class='sites-link' >github</a>`;

  //   adding each box to the html
  const lang = `<div class="lang ${evensOdds}">
    <i class="${e.icon}"></i>
    <span></span>
    <p>${e.desc}</p>
    <div class="skills-links-con">
    ${e.links.site ? siteHTML + githubHTML : githubHTML}
    </div>
    </div>`;
  softCon.innerHTML += lang;
});
