script.js
const inputNome = document.querySelector("#input-nome");
const inputRecado = document.querySelector("#input-recado");
const formulario = document.querySelector("#formulario");


function enviarFormulario (evento) {
    evento.preventDefault();

    console.log("cliquei onde? aqui");
}


//quando o formulario for enviado eu quero que funcione a função enviarFormulario 
formulario.addEventListener("submit", enviarFormulario)
