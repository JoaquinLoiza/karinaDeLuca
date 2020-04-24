"use strict";
   //--------Variables-------//
let inscripcion = [];
let boton = document.getElementById("inscribirse");
let ejemplo = document.getElementById("ejemplo");
let borrartodo = document.getElementById("borrar_todo");
let alerta = document.getElementById("mensaje_incompleto");
let elementos_tabla = document.getElementById("tabla");

borrartodo.addEventListener("click", borrar);
ejemplo.addEventListener("click", agregar_3);
boton.addEventListener("click", inscribirse);

    //--------Funciones--------//

function borrar(){
    if (alerta.innerHTML !="") {
        alerta.innerHTML="";
    }
    if(inscripcion.length>0) {

        for (let i=0; i<inscripcion.length; i++){
            elementos_tabla.deleteRow(1);
        }  
        inscripcion = [];
    }         
}

function agregar_3(){

    alerta.innerHTML="";

    let agregar = {
        "nombre": "Juan",
        "apellido": "Lopez",
        "email": "juan_lopez@gmail.com",
        "telefono": "02491541234",
    }
    
    for (var i=0; i<3; i++) {

        inscripcion.push(agregar);
        let fila = tabla.insertRow (-1);
        let col1 = fila.insertCell (0);
        let col2 = fila.insertCell (1);
        let col3 = fila.insertCell (2);
        let col4 = fila.insertCell (3);

        col1.innerHTML = agregar.nombre;
        col2.innerHTML = agregar.apellido;
        col3.innerHTML = agregar.email;
        col4.innerHTML = agregar.telefono;
    }
}

function inscribirse() {
    
    console.log("funcion agregar");
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById ("email").value;
    let telefono = document.getElementById("telefono").value;
    

    if (nombre === "" || apellido === "" || email === "" || telefono === ""){

        alerta.innerHTML = "¡Todos los campos deben estar completos!";

        return false;
    }
    

    let renglon = {
        "nombre": nombre,
        "apellido": apellido,
        "email": email,
        "telefono": telefono,
    }

    inscripcion.push(renglon);
    let fila= tabla.insertRow (-1);
    let col1= fila.insertCell (0);
    let col2= fila.insertCell (1);
    let col3= fila.insertCell (2);
    let col4= fila.insertCell (3);

    col1.innerHTML = nombre;
    col2.innerHTML = apellido;
    col3.innerHTML = email;
    col4.innerHTML = telefono;

    document.getElementById("nombre").value ="";
    document.getElementById("apellido").value ="";
    document.getElementById ("email").value ="";
    document.getElementById("telefono").value ="";
    
    alerta.innerHTML = "";
}
