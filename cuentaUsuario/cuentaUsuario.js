
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


