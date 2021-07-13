const prevBtn = document.querySelector("#prodPrevBtn");
const nextBtn = document.querySelector("#prodNextBtn");
const prodCardContainer = document.querySelector(".prodCard-container");
let numCards = 0;

nextBtn.addEventListener("click", () => {
  numCards = numCards + 1;
  if (screen.width > 1024) {
    prodCardContainer.style.transform = `translateX(${-26 * numCards}em)`;
  } else if (screen.width <= 1024 && screen.width > 768) {
    prodCardContainer.style.transform = `translateX(${-21 * numCards}em)`;
  } else {
    prodCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
  }
  prodCardContainer.style.transition = "all 1s ease";

  if (numCards > 0) {
    prevBtn.style.display = "block";
  }
  if (numCards == 3) {
    nextBtn.style.display = "none";
  }
});

prevBtn.addEventListener("click", () => {
  numCards = numCards - 1;
  if (screen.width > 1024) {
    prodCardContainer.style.transform = `translateX(${-26 * numCards}em)`;
  } else if (screen.width <= 1024 && screen.width > 768) {
    prodCardContainer.style.transform = `translateX(${-21 * numCards}em)`;
  } else {
    prodCardContainer.style.transform = `translateX(${-16 * numCards}em)`;
  }
  prodCardContainer.style.transition = "all 1s ease";
  if (numCards < 3) {
    nextBtn.style.display = "block";
  }
  if (numCards == 0) {
    prevBtn.style.display = "none";
  }
});
