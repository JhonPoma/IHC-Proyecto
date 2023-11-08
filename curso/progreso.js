const btnMenu = document.querySelector('.icono-usuario');
const menuUsuario = document.querySelector('.menu-usuario');
const btnAvance = document.querySelector('.btn-avance');
const explicacionAvance = document.querySelector('.explicacion-avance');

btnMenu.addEventListener('click', () => {
  menuUsuario.classList.toggle('oculto');
});

document.addEventListener('click', (evt) => {
  let targetEl = evt.target;
  if (targetEl != menuUsuario && targetEl != btnMenu) {
    menuUsuario.classList.add('oculto');
  }
});

btnAvance.addEventListener('click', () => {
  console.log('hola');
  explicacionAvance.classList.toggle('oculto');
});
