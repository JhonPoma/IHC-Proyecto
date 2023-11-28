const btnMenu = document.querySelector(".icono-usuario");
const menuUsuario = document.querySelector(".menu-usuario");
const nota1_1 = document.querySelector(".nota1-1");

btnMenu.addEventListener("click", () => {
  menuUsuario.classList.toggle("oculto");
});

document.addEventListener("click", (evt) => {
  let targetEl = evt.target;
  if (targetEl != menuUsuario && targetEl != btnMenu) {
    menuUsuario.classList.add("oculto");
  }
});

let nota1_1g = localStorage.getItem("nota1-1");

if (nota1_1g !== null) {
  nota1_1.textContent = nota1_1g + " / 10";
}
