
d=document;
const $btnRegistro = d.getElementById("btnRegistrarse");
const $correoValor = d.getElementById("correo");
const $passValor = d.getElementById("pass");


$btnRegistro.addEventListener("click", async (e) =>{
    e.preventDefault();
    const correo = $correoValor.value;
    const pass = $passValor.value;

    try{
        const respuesta = await fetch('http://localhost:5500/registrar',{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({correo,pass}),
        });
        if(respuesta.ok){
            window.location.href="../cuentaUsuario/cuentaUsuario.html";
        }
        else{
            $correoValor.value = "";
            $passValor.value = "";
        }
    }catch (error){
        console.error(error);
    }
});






