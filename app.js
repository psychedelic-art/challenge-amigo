// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo(){
    const nombreAmigoCampo = document.getElementById('amigo');

    if (nombreAmigoCampo.value === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(nombreAmigoCampo.value);
        nombreAmigoCampo.value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const nombreAmigo = amigos[i];
        const itemAmigo = document.createElement('li');
        itemAmigo.innerHTML = nombreAmigo;
        listaAmigos.appendChild(itemAmigo);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía.");
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteo = amigos[indiceAleatorio];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tú amigo secreto es: ${nombreSorteo}.`;
}