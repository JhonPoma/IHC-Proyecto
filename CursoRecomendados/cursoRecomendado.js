

/* ================       PREFERENCIA  ===========================================*/
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
  


/* ======================== COMPRAR UN CURSO =================================== */
document.getElementById('comprarAhoraBtn').addEventListener('click', function() {
  alert("estamos comprando");
  // Almacenar el estado de compra en el almacenamiento local
  localStorage.setItem('cursoCompradoo', 'true');
  // Redirigir a la página navCurso.html
  //window.location.href = '../cuentaUsuario/misCursos.html';
  
  //window.location.href = '../misCursos/misCursos.html';
  //window.location.href = '../misCursos/navCurso.html';

});




