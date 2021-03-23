const hamburgerMenu = document.querySelector(".hamburger__menu");
const scrollBtn = document.querySelector(".scroll-btn");
const html = document.querySelector("html");

// event for hamburger menu / hide and visible
hamburgerMenu.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

scrollBtn.addEventListener("click", () => {
  html.style.scrollBehavior = "smooth";
  setTimeout(() => {
    html.style.scrollBehavior = "unset";
  }, 1000);
});
window.addEventListener("scroll", () => {
  console.log(window.innerHeight, window.scrollY);
  if (window.scrollY > 20) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
});
