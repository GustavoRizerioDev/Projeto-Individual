var navbar = document.querySelector(".cabecalho-nav");

window.addEventListener("scroll", function() {
  if (window.scrollY <= 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "#121212";
  }
});

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselSlide = document.querySelector(".carousel-slide");
const carouselItems = document.querySelectorAll(".carousel-item");
let counter = 0;
const size = carouselItems[0].clientWidth;

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselItems.length - 1) return;
  counter++;
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;
});
