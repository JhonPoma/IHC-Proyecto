const contenedorLLM = document.querySelector(".contenedor-llm");
const btnLLMMostrar = document.querySelector(".btn-llm-mostrar");
const btnLLMOcultar = document.querySelector(".btn-llm-ocultar");
const modulos = document.querySelectorAll(".modulo");
const lecciones = document.querySelectorAll(".leccion");
const materiales = document.querySelectorAll(".material");
const tituloLeccion = document.querySelector(".titulo-leccion");
const contLecciones = document.querySelectorAll(".contenido-leccion");
const btnMenu = document.querySelector(".icono-usuario");
const menuUsuario = document.querySelector(".menu-usuario");
const btnsIniciarPrueba = document.querySelectorAll(".btn-iniciar-prueba");
const formulariosPrueba = document.querySelectorAll(".formulario-prueba");
const btnsMarcarCompleto = document.querySelectorAll(".lectura-completada");
const minuto = document.querySelector(".minuto");
const segundo = document.querySelector(".segundo");
const btnsEnviarPrueba = document.querySelectorAll(".btn-enviar-prueba");
const respuestas = document.querySelectorAll('input[type="radio"]');
const videoCompletado = document.querySelector(".video-completado");

btnLLMMostrar.addEventListener("click", () => {
  contenedorLLM.classList.toggle("oculto");
  btnLLMMostrar.classList.toggle("oculto");
  btnLLMOcultar.classList.toggle("oculto");
});

btnLLMOcultar.addEventListener("click", () => {
  contenedorLLM.classList.toggle("oculto");
  btnLLMMostrar.classList.toggle("oculto");
  btnLLMOcultar.classList.toggle("oculto");
});

modulos.forEach((modulo) => {
  modulo.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-mostrar-ocultar-lecciones")) {
      modulo.querySelector(".comprimido").classList.toggle("oculto");
      modulo.querySelector(".expandido").classList.toggle("oculto");
      modulo.querySelector(".lecciones").classList.toggle("oculto");
    }
  });
});

lecciones.forEach((leccion) => {
  leccion.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-mostrar-ocultar-materiales")) {
      leccion.querySelector(".comprimido").classList.toggle("oculto");
      leccion.querySelector(".expandido").classList.toggle("oculto");
      leccion.querySelector(".materiales").classList.toggle("oculto");
    }
  });
});

materiales.forEach((material) => {
  material.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-material")) {
      materiales.forEach((material) => {
        material.classList.remove("seleccionado");
      });
      material.classList.add("seleccionado");
      tituloLeccion.textContent = material.textContent;

      contLecciones.forEach((contLeccion) => {
        if (contLeccion.classList.contains(material.id)) {
          contLeccion.classList.remove("oculto");
        } else {
          contLeccion.classList.add("oculto");
        }
      });
    }
  });
});

btnMenu.addEventListener("click", () => {
  menuUsuario.classList.toggle("oculto");
});

document.addEventListener("click", (evt) => {
  let targetEl = evt.target;
  if (targetEl != menuUsuario && targetEl != btnMenu) {
    menuUsuario.classList.add("oculto");
  }
});

let intervalID = 0;

let respuestasCorrectas = 0;

btnsIniciarPrueba.forEach((btnIniciarPrueba) => {
  respuestasCorrectas = 0;

  btnIniciarPrueba.addEventListener("click", (evt) => {
    btnLLMMostrar.classList.add("oculto");

    const formularioPrueba =
      evt.target.parentElement.querySelector(".formulario-prueba");
    formularioPrueba.classList.remove("oculto");

    const mensajePrueba =
      evt.target.parentElement.querySelector(".mensaje-prueba");
    mensajePrueba.classList.add("oculto");

    evt.target.classList.add("oculto");

    intervalID = setInterval(() => {
      let seg = parseInt(segundo.textContent);
      let min = parseInt(minuto.textContent);
      if (seg === 1 && min === 0) {
        segundo.textContent = "00";
        clearInterval(intervalID);
        formularioPrueba.classList.add("oculto");
        mensajePrueba.textContent = "Prueba finalizada.";
        mensajePrueba.classList.remove("oculto");
      } else if (seg === 0) {
        seg = 59;
        segundo.textContent = "59";

        if (min < 10) {
          min--;
          minuto.textContent = "0" + min;
        } else {
          min--;
          minuto.textContent = min;
        }
      } else if (seg < 11) {
        seg--;
        segundo.textContent = "0" + seg;
      } else {
        seg--;
        segundo.textContent = seg;
      }
    }, 1000);
  });
});

btnsMarcarCompleto.forEach((btnMarcarCompleto) => {
  btnMarcarCompleto.addEventListener("click", () => {
    btnMarcarCompleto.style.backgroundColor = "#099268";
    btnMarcarCompleto.textContent = "Completado";
    let prog = localStorage.getItem("progreso");
    if (prog === null) {
      localStorage.setItem("progreso", 7.14);
    } else {
      localStorage.setItem("progreso", parseFloat(prog) + 7.14);
    }

    let porcLec = localStorage.getItem("porcentajeLecturas");
    if (porcLec !== null) {
      localStorage.setItem("porcentajeLecturas", parseFloat(porcLec) + 16.67);
    } else {
      localStorage.setItem("porcentajeLecturas", 16.67);
    }
  });
});

videoCompletado.addEventListener("click", () => {
  videoCompletado.style.backgroundColor = "#099268";
  videoCompletado.textContent = "Completado";
  let prog = localStorage.getItem("progreso");
  if (prog === null) {
    localStorage.setItem("progreso", 7.14);
  } else {
    localStorage.setItem("progreso", parseFloat(prog) + 7.14);
  }
  localStorage.setItem("porcentajeVideos", 100);
});

btnsEnviarPrueba.forEach((btnEnviarPrueba) => {
  btnEnviarPrueba.addEventListener("click", (evt) => {
    let resultadoPrueba =
      evt.target.parentElement.parentElement.querySelector(".resultado-prueba");

    clearInterval(intervalID);
    minuto.textContent = "00";
    segundo.textContent = "00";

    respuestas.forEach((respuesta) => {
      if (respuesta.checked) {
        if (respuesta.classList.contains("rc")) {
          respuesta.parentElement
            .querySelector(".correcto")
            .classList.remove("oculto");
          respuestasCorrectas++;
        } else {
          respuesta.parentElement
            .querySelector(".incorrecto")
            .classList.remove("oculto");
        }
      }
      respuesta.disabled = true;
    });

    btnEnviarPrueba.disabled = true;
    btnEnviarPrueba.classList.add("desabilitado");

    btnLLMMostrar.classList.remove("oculto");

    resultadoPrueba.classList.remove("oculto");
    resultadoPrueba.textContent = `Respuestas correctas: ${respuestasCorrectas} / 10`;

    localStorage.setItem("nota1-1", respuestasCorrectas);

    let progres = localStorage.getItem("progreso");

    if (progres !== null) {
      localStorage.setItem(
        "progreso",
        parseInt(progres) + respuestasCorrectas * 5
      );
    } else {
      localStorage.setItem("progreso", respuestasCorrectas * 5);
    }

    localStorage.setItem("porcentajePruebas", 100);
  });
});

$(document).ready(function () {
  // Manejar el envío del formulario
  $("#llm-cabecera").submit(function (event) {
    event.preventDefault(); // Evitar el envío predeterminado del formulario

    // Obtener la pregunta del campo de entrada
    const pregunta = $("#pregunta").val();

    // Realizar una solicitud al servidor
    $.ajax({
      type: "POST",
      url: "/procesar-pregunta", // Puedes ajustar la ruta del servidor
      data: { pregunta: pregunta },
      success: function (respuesta) {
        // Mostrar la respuesta en el párrafo
        $("#llm-respuesta").text(respuesta);
      },
      error: function () {
        console.error("Error al procesar la pregunta");
      },
    });
  });
});

// voz a texto
document.addEventListener("DOMContentLoaded", () => {
  const btnHablarLLM = document.getElementById("btn-hablar-llm");
  const preguntaLLM = document.getElementById("pregunta");

  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = "es-ES"; // Establece el idioma a español

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    //preguntaLLM.value = transcript;

    // Realizar una solicitud al servidor
    $.ajax({
      type: "POST",
      url: "/procesar-pregunta", // Puedes ajustar la ruta del servidor
      data: { pregunta: transcript },
      success: function (respuesta) {
        // Mostrar la respuesta en el párrafo
        $("#llm-respuesta").text(respuesta);
        preguntaLLM.value = "";
      },
      error: function () {
        console.error("Error al procesar la pregunta");
      },
    });
  };

  recognition.onerror = (event) => {
    preguntaLLM.value = "Error al reconocer la voz.";
    console.error(event.error);
  };

  btnHablarLLM.addEventListener("click", () => {
    recognition.start();
    preguntaLLM.value = "Escuchando...";
  });
});
