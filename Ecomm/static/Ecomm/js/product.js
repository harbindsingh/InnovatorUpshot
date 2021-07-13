// mobile view transition code
const mobileview = document.querySelector("#mobileScreen");
if (screen.width > 1024) {
  mobileview.addEventListener("mouseover", () => {
    mobileview.style.transform = "translateX(74%)";
    mobileview.style.transition = "transform 1s ease";
  });
  mobileview.addEventListener("mouseout", () => {
    mobileview.style.transform = "translateX(97%)";
    mobileview.style.transition = "transform 1s ease";
  });
} else if (screen.width <= 1024 && screen.width > 768) {
  mobileview.addEventListener("mouseover", () => {
    mobileview.style.transform = "translateX(64%)";
    mobileview.style.transition = "transform 1s ease";
  });
  mobileview.addEventListener("mouseout", () => {
    mobileview.style.transform = "translateX(97%)";
    mobileview.style.transition = "transform 1s ease";
  });
} else if (screen.width <= 768 && screen.width > 568) {
  mobileview.addEventListener("mouseover", () => {
    mobileview.style.transform = "translateX(54%)";
    mobileview.style.transition = "transform 1s ease";
  });
  mobileview.addEventListener("mouseout", () => {
    mobileview.style.transform = "translateX(97%)";
    mobileview.style.transition = "transform 1s ease";
  });
} else {
  mobileview.addEventListener("mouseover", () => {
    mobileview.style.transform = "translateX(18%)";
    mobileview.style.transition = "transform 1s ease";
  });
  mobileview.addEventListener("mouseout", () => {
    mobileview.style.transform = "translateX(97%)";
    mobileview.style.transition = "transform 1s ease";
  });
}

//product image dispaly synchronization code
const smallImgs = document.querySelectorAll(".small-imgs img");
const displayImgs = document.querySelectorAll(".display-image img");

smallImgs.forEach((imgele) => {
  imgele.addEventListener("click", (event) => {
    const imgId = event.target.getAttribute("imgTarget");
    const displayImg = document.getElementById(imgId);
    smallImgs.forEach((element) => {
      element.classList.remove("active-img");
    });
    event.target.classList.add("active-img");
    displayImgs.forEach((element) => {
      element.classList.add("d-none");
    });
    displayImg.classList.remove("d-none");
  });
});

// feature card animation code
const featureCards = document.querySelectorAll(".featureCard");

featureCards.forEach((f_card) => {
  f_card.addEventListener("mouseover", (event) => {
    event.target.childNodes[1].classList.add("d-none");
    event.target.childNodes[3].classList.remove("d-none");
  });
  f_card.addEventListener("mouseout", (event) => {
    event.target.childNodes[1].classList.remove("d-none");
    event.target.childNodes[3].classList.add("d-none");
  });
});
