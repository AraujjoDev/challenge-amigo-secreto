//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let sorteados = [];

function adicionarAmigo(){
    let entrada = document.querySelector("input").value;
    

    if (entrada == 0 ){
        console.log("Por favor, insira um nome.");
    } else if (entrada < 0 || entrada > 0 ) {
        console.log("Digite um nome")
    }
    else {
        amigos.push(entrada);
    }

}  

function limparCampo(campo){
    if (adicionarAmigo(campo.value))
    campo.value = "";
}