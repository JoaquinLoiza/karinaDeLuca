
function validadatos()
{
    let nomb=document.formulario.nombre;
    let apell=document.formulario.apellido;
    let em=document.formulario.email;
    let consul=document.formulario.consulta;
    let capt=document.formulario.captcha;
    

    if (nomb.value =="") {
        alert("ingrese nombre");
        return false;
    }
    if (apell.value =="") {
        alert("ingrese apellido");
        return false;
    }
    if (em.value =="") {
        alert("ingrese email");
        return false;
    }
    if (consul.value =="") {
        alert("ingrese su consulta");
        return false;
    }
    if (capt.value !="tudai2019") {
        alert("captcha incorrecto");
        return false;
    }
}