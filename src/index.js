const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("close-button");
const titleMenuClose = document.getElementById("title-menu-close");
const body = document.body;

menuButton.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
  navMenu.classList.add("flex");
  body.classList.add("overflow-hidden");
  menuButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  closeButton.classList.add("flex");
  titleMenuClose.classList.add("hidden");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
  body.classList.remove("overflow-hidden");
  menuButton.classList.remove("hidden");
  closeButton.classList.add("hidden");
  closeButton.classList.remove("flex");
  titleMenuClose.classList.remove("hidden");
});
