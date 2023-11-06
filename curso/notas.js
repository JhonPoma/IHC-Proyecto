const btnMenu = document.querySelector('.icono-usuario');
const menuUsuario = document.querySelector('.menu-usuario');

btnMenu.addEventListener('click', () => {
  menuUsuario.classList.toggle('oculto');
});

document.addEventListener('click', (evt) => {
  let targetEl = evt.target;
  if (targetEl != menuUsuario && targetEl != btnMenu) {
    menuUsuario.classList.add('oculto');
  }
});
