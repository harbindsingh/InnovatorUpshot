const slideInNav = () => {
  const navitems = document.querySelector(".navItems");
  const hamburger = document.querySelector(".hamburger");
  const hamStyle = document.querySelector("#hamList i");

  hamburger.addEventListener("click", () => {
    navitems.classList.toggle("showNav");
    hamStyle.classList.toggle("bi-list");
    hamStyle.classList.toggle("bi-x");
  });
};
slideInNav();

const nav = document.querySelector("nav");
const dropMenu = document.querySelector("ul .dropdown-menu");
if (window.innerWidth >= 768) {
  document.addEventListener("scroll", (event) => {
    if (
      document.body.scrollTop >= 80 ||
      document.documentElement.scrollTop >= 80
    ) {
      nav.classList.add("bgBlack");
      dropMenu.classList.add("bgBlack");
    } else {
      nav.classList.remove("bgBlack");
      dropMenu.classList.remove("bgBlack");
    }
  });
}

if (window.innerWidth < 768) {
  nav.classList.remove("fixed-top");
}
