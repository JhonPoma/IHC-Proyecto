
d=document;
const $btnRegistro = d.getElementById("btnRegistrarse");
const $usuarioValor = d.getElementById("usuario");
const $correoValor = d.getElementById("correo");
const $passValor = d.getElementById("pass");

const $mensajeExito = d.getElementById("mensajeRegistroExito"); 
const $mensajeError = d.getElementById("mensajeRegistroError"); 

$btnRegistro.addEventListener("click", async (e) =>{
    e.preventDefault();
    const correo = $correoValor.value;
    const pass = $passValor.value;
    if(correo.length>0 && pass.length>0){
        try{
            const respuesta = await fetch('http://localhost:5500/registrar',{
                method:'POST',
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({correo,pass}),
            });
            if(respuesta.ok){
                if($mensajeExito.style.display==="none" || $mensajeExito.style.display===""){
                    $mensajeExito.style.display="block";
                }
                $mensajeExito.style.display="block";
                window.location.href="../cuentaUsuario/cuentaUsuario.html";
            }
            else{
                if($mensajeError.style.display==="none" || $mensajeError.style.display===""){
                    $mensajeError.style.display="block";
                }
                document.addEventListener("click", (e)=>{
                    $mensajeError.style.display="none";
                })
                $correoValor.value = "";
                $passValor.value = "";
                $usuarioValor.value="";
            }
        }catch (error){
            console.error(error);
        }
    }


});






