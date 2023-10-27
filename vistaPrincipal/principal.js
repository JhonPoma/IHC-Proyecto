//CARRUSEL
const slides = document.querySelectorAll('.carruselCard li');
let currentSlide = 0;

function showSlide(slideIndex) {
  slides[currentSlide].style.display = 'none';
  slides[slideIndex].style.display = 'block';
  currentSlide = slideIndex;
}

function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}
function autoSlide(){
    nextSlide();
}
// Agregamos un temporizador para cambiar las imágenes cada 5 segundos
const interval = setInterval(autoSlide, 5000);

// Manualmente lo hacemos tambien
document.getElementById('prevBoton').addEventListener('click', prevSlide);
document.getElementById('nextBoton').addEventListener('click', nextSlide);
    
// INICIAR SESION
document.getElementById('iniciarSesion').addEventListener('click',e=>{
    //alert("hola");
    var contenedorLogin = document.getElementById('contenedorLogin');
  if (contenedorLogin.style.display === 'none') {
    contenedorLogin.style.display = 'block';
  } else {
    contenedorLogin.style.display = 'none';
  }
});








