
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












