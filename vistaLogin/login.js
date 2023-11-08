
// CREDENCIALES 
const correo = 'admin';
const pass = 'admin';

const d = document;
const $validaSesion = d.getElementById('btnValidaSesion');
const $textCorreo = d.getElementById('correo');
const $textPass = d.getElementById('pass');

$validaSesion.addEventListener("click", e=>{
  // alert($textCorreo.value);
  // alert($textPass.value);
  if($textCorreo.value == correo && $textPass.value==pass){
    //alert("bienvenido");
    window.location.href = "../cuentaUsuario/cuentaUsuario.html";
  }
  else{
    $textCorreo.value = '';
    $textPass.value = '';
  }
});





const $btnPass = document.querySelector(".btnpass");
const $contador = document.getElementById("contador");
const $btnEnviarCodigo = document.getElementById("btnEnviarCodigo");
const $mensaje = d.getElementById("msj");

let tiempoRestante = 5; 

$btnPass.addEventListener("click", () => {
    // Inicia el contador descendente
    let interval = setInterval(() => {
        tiempoRestante--;
        $mensaje.textContent = `Código enviado, verifica tu correo`;
        $contador.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
        
        if (tiempoRestante <= 0) {
            clearInterval(interval);
            $btnEnviarCodigo.style.display = "block";
        }
    }, 1000);
});

$btnEnviarCodigo.addEventListener("click", () => {
    //envío del código nuevamente
    tiempoRestante = 10;
    $btnEnviarCodigo.style.display = "none";
    $contador.textContent = "";
    $btnPass.click();
});









