// Navbar Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// Navbar efecto al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// Contact Form
document.getElementById("contact-form").addEventListener("submit", (e)=>{
  e.preventDefault();
  alert("✅ Gracias por tu mensaje, nos pondremos en contacto pronto.");
  e.target.reset();
});

// 🔹 Slider automático
let slideIndex = 0;
function showSlides(){
  let slides = document.getElementsByClassName("slides");
  for(let i=0;i<slides.length;i++){ slides[i].style.display="none"; }
  slideIndex++;
  if(slideIndex>slides.length){slideIndex=1}
  slides[slideIndex-1].style.display="block";
  setTimeout(showSlides,5000); // cambia cada 5 seg
}
showSlides();


