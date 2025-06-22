const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
const closeButton = document.getElementById("close-button");
const titleMenuClose = document.getElementById("title-menu-close");
const body = document.body;

const tabData = [
  {
    id: 1,
    imageSrc: "./images/illustration-features-tab-1.svg",
    heading: "Bookmark in one click",
    paragraph:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
  },
  {
    id: 2,
    imageSrc: "./images/illustration-features-tab-2.svg",
    heading: "Intelligent search",
    paragraph:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: 3,
    imageSrc: "./images/illustration-features-tab-3.svg",
    heading: "Share your bookmarks",
    paragraph:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

const tabButtons = document.querySelectorAll(".tab-button");
const featureImage = document.getElementById("feature-image");
const featureHeading = document.getElementById("feature-heading");
const featureParagraph = document.getElementById("feature-paragraph");

const ctaForm = document.getElementById("cta-form");
const emailInput = document.getElementById("email-input");
const inputWrapper = document.getElementById("input-wrapper");

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

const handleTabClick = (event) => {
  // set active button
  tabButtons.forEach((button) => {
    button.classList.remove("tab-active");
  });
  const clickedButton = event.currentTarget;
  clickedButton.classList.add("tab-active");

  // change feature content
  const targetTabNumber = clickedButton.dataset.tab;

  // find the tab data based on the clicked button
  const contentToShow = tabData.find(
    (data) => data.id === Number(targetTabNumber)
  );

  // if data is found, update the content
  if (contentToShow) {
    featureImage.src = contentToShow.imageSrc;
    featureHeading.textContent = contentToShow.heading;
    featureParagraph.textContent = contentToShow.paragraph;
  }
};

tabButtons.forEach((button) => {
  button.addEventListener("click", handleTabClick);
});

const clearAllStates = () => {
  inputWrapper.classList.remove("error-state", "success-state");
};

ctaForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  clearAllStates();

  if (!emailRegex.test(emailInput.value) || emailInput.value === "") {
    inputWrapper.classList.add("error-state");
  } else {
    inputWrapper.classList.add("success-state");

    emailInput.value = "";

    setTimeout(() => {
      clearMessages();
    }, 3000);
  }
});

emailInput.addEventListener("input", () => {
  clearAllStates();
});
