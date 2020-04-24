'use strict';

let boton = document.getElementById("enviar");
let imagencapt = document.getElementById("img_aleatoria");
let captcha= document.getElementById("captcha");
let a = 0;
let z = 0;

a = Math.floor((Math.random()*5)+1);
window.onload = cambiar();
boton.addEventListener("click", validarcampos);

function validarcampos(){

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let consulta = document.getElementById("consulta").value;

    if (nombre === "" || apellido === "" || email === "" || consulta === ""){

        alert("¡Todos los campos deben estar completos!");

        return false;
    }

    else {
        boton.addEventListener("click", validar);
    }
}

function cambiar(){
    imagencapt.src = "./image/capcha/"+"img0"+ a +".png";
    z= "./image/capcha/"+"img0"+ a +".png";
}

function validar(e) {

    if (z=== "./image/capcha/img01.png" ) {
        if (captcha.value!="tudai2019") {
            alert("CAPTCHA INCORRECTO");
            e.preventDefault();              
        }       
    }
    else if (z=== "./image/capcha/img02.png" ) {
        if (captcha.value!="gb4p9a7n") {
            alert("CAPTCHA INCORRECTO");
            e.preventDefault();        
        }       
    }
    else if (z=== "./image/capcha/img03.png" ) {
        if (captcha.value!="rf5klmh8") {
            alert("CAPTCHA INCORRECTO");
            e.preventDefault(); 
        }       
    }
    else if (z=== "./image/capcha/img04.png" ) {
        if (captcha.value!="nzw97lu8") {
            alert("CAPTCHA INCORRECTO");
            e.preventDefault();        
        }       
    }
    else if (z=== "./image/capcha/img05.png" ) {
        if (captcha.value!="aw57cy36") {
            alert("CAPTCHA INCORRECTO");
            e.preventDefault(); 
        }       
    }        
}