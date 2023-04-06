// fancybox image gallery

const gallImages = document.querySelectorAll(".imageCon");

const filterBtn = document.querySelectorAll(".filterBtn");

const allBtn = document.querySelector(".allBtn");
const ladiesBtn = document.querySelector(".ladiesBtn");
const gentsBtn = document.querySelector(".gentsBtn");
const placesBtn = document.querySelector(".placesBtn");

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

allBtn.addEventListener("click", (event) => {
  if (allBtn.classList.value.includes("selected")) {
  } else {
    allBtn.classList.add("selected");

    ladiesBtn.classList.remove("selected");
    gentsBtn.classList.remove("selected");
    placesBtn.classList.remove("selected");
  }

  gallImages.forEach((img) => {
    if (img.classList.value.includes("all")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

ladiesBtn.addEventListener("click", (event) => {
  if (ladiesBtn.classList.value.includes("selected")) {
  } else {
    ladiesBtn.classList.add("selected");

    allBtn.classList.remove("selected");
    gentsBtn.classList.remove("selected");
    placesBtn.classList.remove("selected");
  }

  gallImages.forEach((img) => {
    if (img.classList.value.includes("ladies")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

gentsBtn.addEventListener("click", (event) => {
  if (gentsBtn.classList.value.includes("selected")) {
  } else {
    gentsBtn.classList.add("selected");

    allBtn.classList.remove("selected");
    ladiesBtn.classList.remove("selected");
    placesBtn.classList.remove("selected");
  }

  gallImages.forEach((img) => {
    if (img.classList.value.includes("gents")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});

placesBtn.addEventListener("click", (event) => {
  if (placesBtn.classList.value.includes("selected")) {
  } else {
    placesBtn.classList.add("selected");

    allBtn.classList.remove("selected");
    ladiesBtn.classList.remove("selected");
    gentsBtn.classList.remove("selected");
  }

  gallImages.forEach((img) => {
    if (img.classList.value.includes("places")) {
      img.style.display = "flex";
    } else {
      img.style.display = "none";
    }
  });
});
