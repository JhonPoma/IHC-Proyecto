
const contenido = document.getElementById("contenedor-curso");
const navCurso = document.getElementById("nav-curso");
const navTerminado = document.getElementById("nav-terminado");
const navRetirarse = document.getElementById("nav-retirarse");


function cargarContenido(url) {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      contenido.innerHTML = data;
    })
    .catch(function (error) {
      console.log("error al cargar el contenido: " + error);
    });
}

// Cargar contenido de navCurso.html al cargar la página
cargarContenido(navCurso.getAttribute("href"));

// Manejar clics en los enlaces
navCurso.addEventListener("click", function (event) {
  event.preventDefault();
  cargarContenido(this.getAttribute("href"));
  this.classList.add("enlace-clicked");
  navTerminado.classList.remove("enlace-clicked");
  navRetirarse.classList.remove("enlace-clicked");
});

navTerminado.addEventListener("click", function (event) {
  event.preventDefault();
  cargarContenido(this.getAttribute("href"));
  this.classList.add("enlace-clicked");
  navCurso.classList.remove("enlace-clicked");
  navRetirarse.classList.remove("enlace-clicked");
});

navRetirarse.addEventListener("click", function (event) {
  event.preventDefault();
  cargarContenido(this.getAttribute("href"));
  this.classList.add("enlace-clicked");
  navCurso.classList.remove("enlace-clicked");
  navTerminado.classList.remove("enlace-clicked");
});












