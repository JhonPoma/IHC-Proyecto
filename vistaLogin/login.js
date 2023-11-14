
// CREDENCIALES 
// const correo = 'admin';
// const pass = 'admin';

const d = document;
const $loginForm = d.getElementById('login-form');
const $validaSesion = d.getElementById('btnValidaSesion');
const $textCorreo = d.getElementById('correo');
const $textPass = d.getElementById('pass');


$validaSesion.addEventListener("click", async(e)=>{
  e.preventDefault();
  const correo = $textCorreo.value;
  const pass = $textPass.value;

  //Solicitud POST al servidor
  try{
    const response = await fetch('http://localhost:5500/validar',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({correo,pass}),
    });
    alert("jhonFronted");
    if(response.ok){
      window.location.href="../cuentaUsuario/cuentaUsuario.html";
    }else{
      alert("credenciales incorrectAss-FRONTED");
      $textCorreo.value = "";
      $textPass.value = "";
    }
  }
  catch (error){
    console.error(error);
  }
})









// ==== Recuperar Contraseña ======
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


















// ============================= SIN BACKEND ======================
// // CREDENCIALES 
// // const correo = 'admin';
// // const pass = 'admin';

// const d = document;
// const $loginForm = d.getElementById('login-form');
// const $validaSesion = d.getElementById('btnValidaSesion');
// const $textCorreo = d.getElementById('correo');
// const $textPass = d.getElementById('pass');

// // $validaSesion.addEventListener("click", e=>{
// //   // alert($textCorreo.value);
// //   // alert($textPass.value);
// //   if($textCorreo.value == correo && $textPass.value==pass){
// //     //alert("bienvenido");
// //     window.location.href = "../cuentaUsuario/cuentaUsuario.html";
// //   }
// //   else{
// //     $textCorreo.value = '';
// //     $textPass.value = '';
// //   }
// // });



// // ==== Recuperar Contraseña ======
// const $btnPass = document.querySelector(".btnpass");
// const $contador = document.getElementById("contador");
// const $btnEnviarCodigo = document.getElementById("btnEnviarCodigo");
// const $mensaje = d.getElementById("msj");

// let tiempoRestante = 5; 

// $btnPass.addEventListener("click", () => {
//     // Inicia el contador descendente
//     let interval = setInterval(() => {
//         tiempoRestante--;
//         $mensaje.textContent = `Código enviado, verifica tu correo`;
//         $contador.textContent = `Tiempo restante: ${tiempoRestante} segundos`;
        
//         if (tiempoRestante <= 0) {
//             clearInterval(interval);
//             $btnEnviarCodigo.style.display = "block";
//         }
//     }, 1000);
// });

// $btnEnviarCodigo.addEventListener("click", () => {
//     //envío del código nuevamente
//     tiempoRestante = 10;
//     $btnEnviarCodigo.style.display = "none";
//     $contador.textContent = "";
//     $btnPass.click();
// });


