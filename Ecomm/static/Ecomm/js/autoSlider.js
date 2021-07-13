const imgContainer = document.querySelector(".img-container");
const sliderImages = document.querySelectorAll(".imgs");
const sliderImagesOn = document.querySelectorAll(".imgsOn");

let sliderEffect = null;

const sliderFunc = () => {
  sliderEffect = setInterval(() => {
    imgContainer.style.transform = "translate(0)";
    imgContainer.style.transition = "all 1s";
    let firstChild = imgContainer.firstElementChild;
    imgContainer.removeChild(imgContainer.firstElementChild);
    imgContainer.appendChild(firstChild);
  }, 1500);
};

sliderFunc();

sliderImages.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    clearInterval(sliderEffect);

    event.target.classList.add("d-none");
    event.target.nextElementSibling.classList.remove("d-none");
  });
});
sliderImages.forEach((element) => {
  element.addEventListener("mouseout", (event) => {
    sliderFunc();
  });
});

sliderImagesOn.forEach((element) => {
  element.addEventListener("mouseover", (event) => {
    clearInterval(sliderEffect);
  });
});
sliderImagesOn.forEach((element) => {
  element.addEventListener("mouseout", (event) => {
    sliderFunc();
    event.target.classList.add("d-none");
    event.target.previousElementSibling.classList.remove("d-none");
  });
});
