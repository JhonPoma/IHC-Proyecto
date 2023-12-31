
document.addEventListener('DOMContentLoaded', function() {
  const contenido = document.getElementById("contenedor-curso");
  const navCurso = document.getElementById("nav-curso");
  const navTerminado = document.getElementById("nav-terminado");
  const navRetirarse = document.getElementById("nav-retirarse");

  // function cargarContenido(url) {
  //   fetch(url)
  //     .then(function (response) {
  //       return response.text();
  //     })
  //     .then(function (data) {
  //       contenido.innerHTML = data;
  //       const cursoComprado = localStorage.getItem('cursoCompradoo');
  //       const curso3 = document.getElementById("cursoComprado3");
  //       if (cursoComprado == 'true') {
  //         curso3.style.display = 'block';
  //       } else {
  //         curso3.style.display = 'none';
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("error al cargar el contenido: " + error);
  //     });
  // }
  function cargarContenido(url) {
    fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        contenido.innerHTML = data;

        //LOGICA MATRICULARSE CURSO DINAMICO
        const cursoComprado = localStorage.getItem('cursoCompradoo');
        const curso3 = document.getElementById("cursoComprado3");
        const cursoCompradoPOO = localStorage.getItem('cursoCompradoPOO-localStorage');
        const cursoPOO = document.getElementById("cursoCompradoPOO");
        if (cursoComprado == 'true') {
          curso3.style.display = 'block';
        }else {
          curso3.style.display = 'none';
        }

        if(cursoCompradoPOO =='true'){
          cursoPOO.style.display = 'block';
        }else {
          cursoPOO.style.display = 'none';
        }
        

      // LOGICA PARA RETIRARSE DE UN CURSO
        const clickBtnRetirarseIA = document.getElementById("btnRetirarseIA");
        clickBtnRetirarseIA.addEventListener("click", () => {
            //alert("Retirandome de IA");
            localStorage.removeItem("cursoCompradoo");
            curso3.style.display = 'none';
        });
        
        const clickBtnRetirarsePOO = document.getElementById("btnRetirarsePOO");
        clickBtnRetirarsePOO.addEventListener("click", () => {
            //alert("holaa");
            localStorage.removeItem("cursoCompradoPOO-localStorage");
            cursoPOO.style.display = 'none';
        });
    
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

  const $derechaPerfil = document.getElementById("derechaPerfil");
  $derechaPerfil.addEventListener("click", e => {
    window.location.href = "../cuentaUsuario/perfil.html";
  });
});



/* ================       PREFERENCIA  ====================*/
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







