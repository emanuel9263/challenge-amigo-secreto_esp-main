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

    actualizarLista();
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {

        const li = document.createElement("li");
        
        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // se valida que la lsita no se encuentre vacia
    if (amigos.length === 0) {
        alert("La lista de amigos esta vacia..,");
        return
    }
    //se genera un indice aleatorio 
    const indice = Math.floor(Math.random() * amigos.length);
    //se selecciona el nombre correspondiente
    const seleccionado = amigos[indice];
    //se muestra el resultado en el elemento id = "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${seleccionado}</strong></li>`;
    
}