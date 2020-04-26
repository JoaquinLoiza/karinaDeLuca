
window.addEventListener('DOMContentLoaded', (cargarPagina));

"use strict";

function cargarPagina() {
    //--------Datos a enviar--------
    let nivel = document.getElementById('nivel');
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let mail = document.getElementById('email');
    let telefono = document.getElementById('telefono');
    //--------Datos a editar--------
    let idObjeto = document.getElementById('idObjeto');
    let nivelEditado = document.getElementById('nivelModif');
    let nombreEditado = document.getElementById('nombreModif');
    let apellidoEditado = document.getElementById('apellidoModif');
    let mailEditado = document.getElementById('emailModif');
    let telefonoEditado = document.getElementById('telefonoModif');
    //--------Botones---------------
    let btnCargar = document.getElementById('cargarPerfil');
    let btnEnviarEdicion = document.getElementById('cargarEdicion');
    let btnEnviarEjemplos = document.getElementById('ejemplo');
    let btnBorrarTodo = document.getElementById('borrar_todo');
    let btnFiltrar = document.getElementById('filtrar');
    //--------Otras-----------------
    let opFiltro = document.getElementById('filtro');
    let alerta = document.getElementById('mensaje_incompleto');
    let alertaEdit = document.getElementById('alerta_incompleto');
    let url = "https://web-unicen.herokuapp.com/api/groups/grupo03rauch/inscriptos";

    traerDatosServidor();
    btnFiltrar.addEventListener("click", filtrarDatos);
    function traerDatosServidor() {

        fetch(url, {
        }).then(function (r) {
            if (!r.ok) {
                alert("No se pudieron traer los datos del servidor");
            }
            else {
                return r.json();
            }
        }).then(function (json) {
            let idItem = [];
            let iterador = 0;
            contTabla.innerHTML = "";

            for (let item of json.inscriptos) {

                contTabla.innerHTML +=
                    `
                <tr id="filas">
                <td>${item.thing.nivel}</td>
                <td>${item.thing.nombre}</td>
                <td>${item.thing.apellido}</td>
                <td>${item.thing.mail}</td>
                <td>${item.thing.telefono}</td>
                <td><button id="btnsEditar">Editar</button></td>
                <td><button id="botones">Eliminar</button></td>
                </tr>
                `;
                idItem[iterador] = item._id;
                iterador++;


            }
            eliminarUno(idItem);
            borrarTodo(idItem);
            editarUno(idItem);
            btnEnviarEjemplos.addEventListener("click", enviarEjemplos);
            btnCargar.addEventListener("click", enviarDatosAServidor);

        }).catch(function (e) {
            console.log(e);
        })
    }
    function enviarDatosAServidor() {
        let level = nivel.value;
        let name = nombre.value;
        let surname = apellido.value;
        let email = mail.value;
        let cellphone = telefono.value;
        let perfil = {
            "thing": {
                "nivel": level,
                "nombre": name,
                "apellido": surname,
                "mail": email,
                "telefono": cellphone
            }
        };
        if (level === "" || name === "" || surname === "" || email === "" || cellphone === "") {
            alerta.innerHTML = "¡Todos los campos deben estar completos!";
            return false;
        }
        fetch(url, {
            "method": "POST",
            "headers": { "Content-Type": "application/json" },
            "body": JSON.stringify(perfil)
        }).then(function (r) {
            if (!r.ok) {
                alert("Error al enviar los datos, intente nuevamente");
            }
        }).then(function () {
            contTabla.innerHTML = "";
            traerDatosServidor();
            alerta.innerHTML = "";
            nivel.value = "";
            nombre.value = "";
            apellido.value = "";
            mail.value = "";
            telefono.value = "";
        }).catch(function (e) {
            console.log(e);
        });
    }
    function enviarEjemplos() {

        let perfil = {
            "thing": {
                "nivel": "Profecional",
                "nombre": "Federico",
                "apellido": "Lagomarsino",
                "mail": "fede_lagomarsino@gmail.com",
                "telefono": "2494123456"
            }
        };
        for (let i = 1; i < 4; i++) {
            fetch(url, {
                "method": "POST",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(perfil)
            })
                .then(function (r) {
                    if (!r.ok) {
                        alert("Error al enviar los datos, intente nuevamente");
                    }
                }).then(function () {
                    contTabla.innerHTML = "";
                    if (i === 3) {
                        traerDatosServidor();
                    }
                }).catch(function (e) {
                    console.log(e);
                });
        }
    }
    function borrarTodo(idItem) {

        btnBorrarTodo.addEventListener("click", function () {

            for (let i = 0; i < idItem.length; i++) {
                fetch(url + "/" + idItem[i], {
                    "method": "DELETE",
                }).then(() => {
                    contTabla.innerHTML = "";
                }).catch(err => {
                    console.error("Error al remover")
                })
            }
        });
    }
    function eliminarUno(idItem) {

        let botones = document.querySelectorAll('#botones');

        for (let i = 0; i < botones.length; i++) {

            botones[i].addEventListener("click", function () {

                fetch(url + "/" + idItem[i], {
                    "method": "DELETE",
                }).then(() => {
                    contTabla.innerHTML = "";
                    traerDatosServidor();
                }).catch(err => {
                    console.error("Error al remover")
                })
            });
        }
    }
    function editarUno(idItem) {

        let botones = document.querySelectorAll('#btnsEditar');

        for (let i = 0; i < botones.length; i++) {

            botones[i].addEventListener("click", function () {
                idObjeto.value = idItem[i];
                document.getElementById("filaEditar").innerHTML =
                    "Usted seleccionó la fila " + (i + 1) + ", complete los campos a editar";
            });
        }

        btnEnviarEdicion.addEventListener("click", function () {

            let level = nivelEditado.value;
            let name = nombreEditado.value;
            let surname = apellidoEditado.value;
            let email = mailEditado.value;
            let cellphone = telefonoEditado.value;
            let perfil = {
                "thing": {
                    "nivel": level,
                    "nombre": name,
                    "apellido": surname,
                    "mail": email,
                    "telefono": cellphone
                }
            };

            if (level === "" || name === "" || surname === "" || email === "" || cellphone === "") {
                alertaEdit.innerHTML = "¡Todos los campos deben estar completos!";
                return false;
            }
            if (idObjeto.value === "") {
                alertaEdit.innerHTML = "Debe presionar en la tabla el boton editar de la fila que desea";
                return false;
            }

            fetch(url + "/" + idObjeto.value, {
                "method": "PUT",
                "headers": { "Content-Type": "application/json" },
                "body": JSON.stringify(perfil)
            }).then((r) => {
                if (!r.ok) {
                    alert("No se pudieron editar los datos correctamente");
                }
            }).then(() => {
                contTabla.innerHTML = "";
                idObjeto.value = "";
                nivelEditado.value = "";
                nombreEditado.value = "";
                apellidoEditado.value = "";
                mailEditado.value = "";
                telefonoEditado.value = "";
                document.getElementById("filaEditar").innerHTML = "";
                alertaEdit.innerHTML = "";
                traerDatosServidor();

            }).catch(err => {
                console.error("Error");
            })
        });
    }
    function filtrarDatos() {

        if (opFiltro.value != "") {   
            contTabla.innerHTML = "";
            fetch(url, {
            }).then(function (r) {
                if (!r.ok) {
                    contTabla.innerHTML = "";
                }
                else {
                    return r.json();
                }
            }).then(function (json) {
                for (let item of json.inscriptos) {
                    if (item.thing.nivel === opFiltro.value) {
                        contTabla.innerHTML +=
                            `
                    <tr id="filas">
                    <td>${item.thing.nivel}</td>
                    <td>${item.thing.nombre}</td>
                    <td>${item.thing.apellido}</td>
                    <td>${item.thing.mail}</td>
                    <td>${item.thing.telefono}</td>
                    <td>#</td>
                    <td>#</td>
                    </tr>
                    `;
                    }
                }
            });
        } else {
            traerDatosServidor();
        }
    }
}