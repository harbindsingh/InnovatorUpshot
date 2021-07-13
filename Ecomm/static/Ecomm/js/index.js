const bgVideo = document.querySelector("#videoBg"); // video background div
const soundBtn = document.querySelector("#sound-btn"); // sound btn
const muteBtn = document.querySelector("#mute-btn"); // mute btn

// mute btn on click event
muteBtn.addEventListener("click", () => {
  bgVideo.muted = false;
  muteBtn.classList.toggle("d-none");
  soundBtn.classList.toggle("d-none");
});

//sound btn on click event
soundBtn.addEventListener("click", () => {
  bgVideo.muted = true;
  muteBtn.classList.toggle("d-none");
  soundBtn.classList.toggle("d-none");
});
