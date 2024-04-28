var navbar = document.querySelector(".cabecalho-nav");

window.addEventListener("scroll", function() {
  if (window.scrollY === 0) {
    navbar.style.backgroundColor = "transparent";
  } else {
    navbar.style.backgroundColor = "#121212";
  }
});
