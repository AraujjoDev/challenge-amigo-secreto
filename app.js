//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let sorteados = [];

function adicionarAmigo(){
    let entrada = document.querySelector("input").value;
    

    if (entrada == 0 ){
        alert("Por favor, insira um nome.");
    } else if (entrada < 0 || entrada > 0 ) {
        alert("Digite um nome");
    }
    else {
        amigos.push(entrada);
        
    }
    console.log(amigos)   
    limparCampo();
}  

function limparCampo(){
    entrada = document.querySelector('input');
    entrada.value = "";
}

function atualizarLista(){
    lista = document.getElementById(listaAmigos);
    //lista.innerHTML = amigos;
    lista.innerHTML = "";
}