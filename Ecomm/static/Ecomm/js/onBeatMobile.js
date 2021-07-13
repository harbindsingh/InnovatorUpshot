const outerBlast = document.querySelector(".outerBeat");
const Onbeatlogo = document.querySelector("#onBeatCenter-img");
const bgVideo = document.getElementById("bgVideo");
let videosrc = document.querySelector("#bgVideoSrc");
const songBtn = document.querySelectorAll(".songSelector");
const overlay = document.querySelector("#videoCover");
const colorBtns = document.querySelectorAll(".colorPickbtn");
const mutebtn = document.querySelector(".bi-volume-mute-fill");

mutebtn.addEventListener("click", () => {
  bgVideo.muted = true;
});

let flag = false;

Onbeatlogo.addEventListener("click", () => {
  outerBlast.classList.toggle("outerBeatEffect");
  Onbeatlogo.classList.toggle("rotate");
  const beatVideo = videosrc.getAttribute("data-beatVideo");
  overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
  if (beatVideo != null) {
    videosrc.src = beatVideo;
    bgVideo.load();
  }
  if (bgVideo.muted == true) {
    bgVideo.muted = false;
  }
  flag = false;
});

// video BG change Code

songBtn.forEach((song) => {
  song.addEventListener("click", () => {
    outerBlast.classList.remove("outerBeatEffect");
    Onbeatlogo.classList.remove("rotate");
    const targetVideo = song.getAttribute("data-targetVideo");
    const beatVideo = song.getAttribute("data-beatVideo");
    videosrc.src = targetVideo;
    videosrc.setAttribute("data-beatVideo", beatVideo);
    bgVideo.load();
    overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
    bgVideo.muted = false;
    flag = true;
  });
});

colorBtns.forEach((btns) => {
  btns.addEventListener("click", () => {
    if (flag == true) {
      const overlayColor = btns.getAttribute("data-targetColor");
      overlay.style.backgroundColor = overlayColor;
    }
  });
});

// song carousel in mobile view

const songprevBtn = document.querySelector("#songPrevBtn");
const songnextBtn = document.querySelector("#songNextBtn");
const songContainer = document.querySelector(".songs-container");
let num = 0;

songnextBtn.addEventListener("click", () => {
  num = num + 1;
  songContainer.style.transform = `translateX(${-17 * num}em)`;
  if (screen.width < 766) {
    songContainer.style.transform = `translateX(${-5 * num}em)`;
  }
  songContainer.style.transition = "all 1s ease";
  if (num > 0) {
    songprevBtn.style.display = "block";
  }
  if (num == 7) {
    songnextBtn.style.display = "none";
  }
});

songprevBtn.addEventListener("click", () => {
  num = num - 1;
  songContainer.style.transform = `translateX(${-17 * num}em)`;
  if (screen.width < 766) {
    songContainer.style.transform = `translateX(${-5 * num}em)`;
  }
  songContainer.style.transition = "all 1s ease";
  if (num < 7) {
    songnextBtn.style.display = "block";
  }
  if (num == 0) {
    songprevBtn.style.display = "none";
  }
});
