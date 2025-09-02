// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    //se captura el valor del input
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();


    //validar que no este vacio

    if (nombre === ""){
        alert("El campo no puede estar vacio, Introduzca un nombre");
        return;
    }

    //agregar al array
    amigos.push(nombre);

    //limpiar el campo
    input.value = "";

    //mostrar en consola

    console.log("Lista de amigos ", amigos);

}