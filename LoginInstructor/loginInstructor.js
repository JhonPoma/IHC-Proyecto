
// const btnIniciarSesionInstructor = document.getElementById("btnValidaSesion");

// btnIniciarSesionInstructor.addEventListener("click",e=>{
//     window.location.href = "../LoginInstructor/principalInstructor.html";
// });


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
    //alert("jhonFronted");
    if(response.ok){
      window.location.href="../LoginInstructor/principalInstructor.html";
    }else{
      //alert("credenciales incorrectAss-FRONTED");
      $textCorreo.value = "";
      $textPass.value = "";
    }
  }
  catch (error){
    console.error(error);
  }
})




