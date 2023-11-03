const contenedorLLM = document.querySelector('.contenedor-llm');
const btnLLMMostrar = document.querySelector('.btn-llm-mostrar');
const btnLLMOcultar = document.querySelector('.btn-llm-ocultar');
const modulos = document.querySelectorAll('.modulo');
const lecciones = document.querySelectorAll('.leccion');
const materiales = document.querySelectorAll('.material');
const tituloLeccion = document.querySelector('.titulo-leccion');
const contLecciones = document.querySelectorAll('.contenido-leccion');

btnLLMMostrar.addEventListener('click', () => {
  contenedorLLM.classList.toggle('oculto');
  btnLLMMostrar.classList.toggle('oculto');
  btnLLMOcultar.classList.toggle('oculto');
});

btnLLMOcultar.addEventListener('click', () => {
  contenedorLLM.classList.toggle('oculto');
  btnLLMMostrar.classList.toggle('oculto');
  btnLLMOcultar.classList.toggle('oculto');
});

modulos.forEach((modulo) => {
  modulo.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-mostrar-ocultar-lecciones')) {
      modulo.querySelector('.comprimido').classList.toggle('oculto');
      modulo.querySelector('.expandido').classList.toggle('oculto');
      modulo.querySelector('.lecciones').classList.toggle('oculto');
    }
  });
});

lecciones.forEach((leccion) => {
  leccion.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-mostrar-ocultar-materiales')) {
      leccion.querySelector('.comprimido').classList.toggle('oculto');
      leccion.querySelector('.expandido').classList.toggle('oculto');
      leccion.querySelector('.materiales').classList.toggle('oculto');
    }
  });
});

materiales.forEach((material) => {
  material.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-material')) {
      materiales.forEach((material) => {
        material.classList.remove('seleccionado');
      });
      material.classList.add('seleccionado');
      tituloLeccion.textContent = material.textContent;

      contLecciones.forEach((contLeccion) => {
        if (contLeccion.classList.contains(material.id)) {
          contLeccion.classList.remove('oculto');
        } else {
          contLeccion.classList.add('oculto');
        }
      });
    }
  });
});
