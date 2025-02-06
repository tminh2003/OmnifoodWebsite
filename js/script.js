const mobileNavClose = document.querySelector(".nav-mobile-button-close");
const listButton = document.querySelector(".nav-mobile-button-list");
const mobileNavHeader = document.querySelector(".header");

mobileNavClose.addEventListener("click", function () {
  mobileNavHeader.classList.toggle("nav-open");
});
listButton.addEventListener("click", function (event) {
  mobileNavHeader.classList.toggle("nav-open");
});
