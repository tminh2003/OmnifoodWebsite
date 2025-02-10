const mobileNavClose = document.querySelector(".nav-mobile-button-close");
const listButton = document.querySelector(".nav-mobile-button-list");
const mobileNavHeader = document.querySelector(".header");
const allLinks = document.querySelectorAll("a:link");
const allNavLinks = document.querySelectorAll(".main-nav a");
console.log(allNavLinks);

mobileNavClose.addEventListener("click", function () {
  mobileNavHeader.classList.toggle("nav-open");
});
listButton.addEventListener("click", function (event) {
  mobileNavHeader.classList.toggle("nav-open");
});

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

allNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    mobileNavHeader.classList.toggle("nav-open");
  });
});

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

const heroSection = document.querySelector(".hero-section");
console.log;
obs.observe(heroSection);
