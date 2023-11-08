
const $iconUsuario = document.getElementById('iconUsuario');
const $menuOpciones = document.getElementById('menuOpciones');

$iconUsuario.addEventListener('click', () => {
    //alert("hola");
  // Muestra o oculta el menú de opciones 
  if ($menuOpciones.style.display === 'none' || $menuOpciones.style.display === '') {
    $menuOpciones.style.display = 'block';
  } else {
    $menuOpciones.style.display = 'none';
  }
  //alert("sali")
});

// Cierra el menú de opciones si se hace clic fuera de él
document.addEventListener('click', (event) => {
  if (event.target !== $iconUsuario && event.target !== $menuOpciones) {
    $menuOpciones.style.display = 'none';
  }
});

const cerrarSesion = document.querySelector(".btn-salir2");
cerrarSesion.addEventListener("click", e=>{
  window.location.href = "../vistaPrincipal/principal.html";
});


const $derechaMisCursos = document.getElementById("derechaMisCursos");
$derechaMisCursos.addEventListener("click",e=>{
  window.location.href = "../misCursos/misCursos.html";
});


/* ============ PREFERENCIAS ===============*/

// document.addEventListener("DOMContentLoaded", function() {
//   const temaSelect = document.getElementById("tema");
//   const guardaButton = document.getElementById("guarda2");

  
//   guardaButton.addEventListener("click", function() {
//     const temaElegido = temaSelect.value;

//     if (temaElegido === "oscuro") {
//       // Cambiamos el fondo del body a oscuro
//       document.body.style.backgroundColor = "#737373";
//       document.body.style.color = "#f5f5f5";
//     } else {
//       // Restauramos el fondo claro
//       document.body.style.backgroundColor = "#f5f5f5";
//       document.body.style.color = "black";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  const temaSelect = document.getElementById("tema");
  const guardaButton = document.getElementById("guarda2");

  // Recuperar la preferencia de tema almacenada en localStorage, si existe
  const temaAlmacenado = localStorage.getItem("tema");
  if (temaAlmacenado) {
    document.body.style.backgroundColor = temaAlmacenado === "oscuro" ? "#737373" : "white";
    document.body.style.color = temaAlmacenado === "oscuro" ? "white" : "#737373";
    temaSelect.value = temaAlmacenado;
  }

  // Agregar un evento click al botón "Guardar Cambios"
  guardaButton.addEventListener("click", function() {
    const temaElegido = temaSelect.value;

    // Guardar la preferencia del tema en localStorage
    localStorage.setItem("tema", temaElegido);

    if (temaElegido === "oscuro") {
      // Cambiar el fondo del body a oscuro
      document.body.style.backgroundColor = "#737373";
      document.body.style.color = "#f5f5f5";
    } else {
      // Restaurar el fondo claro
      document.body.style.backgroundColor = "#f5f5f5";
      document.body.style.color = "black";
    }
  });
});





