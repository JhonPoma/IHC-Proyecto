const btnMenu = document.querySelector(".icono-usuario");
const menuUsuario = document.querySelector(".menu-usuario");
const btnAvance = document.querySelector(".btn-avance");
const explicacionAvance = document.querySelector(".explicacion-avance");
const porcentaje = document.querySelector(".porcentaje");
const porcentajeVideos = document.querySelector(".porcentaje-videos");
const porcentajeLecturas = document.querySelector(".porcentaje-lecturas");
const porcentajePruebas = document.querySelector(".porcentaje-pruebas");

btnMenu.addEventListener("click", () => {
  menuUsuario.classList.toggle("oculto");
});

document.addEventListener("click", (evt) => {
  let targetEl = evt.target;
  if (targetEl != menuUsuario && targetEl != btnMenu) {
    menuUsuario.classList.add("oculto");
  }
});

btnAvance.addEventListener("click", () => {
  explicacionAvance.classList.toggle("oculto");
});

let progreso = localStorage.getItem("progreso");

if (progreso !== null) {
  porcentaje.textContent = parseFloat(progreso).toFixed(2) + " %";
} else {
  porcentaje.textContent = "0 %";
}

let porcVideos = localStorage.getItem("porcentajeVideos");
let porcLecturas = localStorage.getItem("porcentajeLecturas");
let porcPruebas = localStorage.getItem("porcentajePruebas");

if (porcVideos !== null) {
  porcentajeVideos.textContent = parseFloat(porcVideos).toFixed(2) + " %";
} else {
  porcentajeVideos.textContent = "0 %";
}

if (porcLecturas !== null) {
  porcentajeLecturas.textContent = parseFloat(porcLecturas).toFixed(2) + " %";
} else {
  porcentajeLecturas.textContent = "0 %";
}

if (porcPruebas !== null) {
  porcentajePruebas.textContent = parseFloat(porcPruebas).toFixed(2) + " %";
} else {
  porcentajePruebas.textContent = "0 %";
}
