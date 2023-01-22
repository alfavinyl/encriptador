
function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

var textoEncriptado = frase.replace(/e/igm, "enter");
var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");


document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
document.getElementById("botonCopiar").style.display = "show";
document.getElementById("botonCopiar").style.display = "inherit";

}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

var textoEncriptado = frase.replace(/enter/igm, "e");
var textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
var textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
var textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");


document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

}
function copiar (){
    var contenido = document.querySelector("#textoDesencriptado");

    contenido.select();
    document.execCommand("copy");


}

var textArea = document.getElementById("textoDesencriptado");

textArea.addEventListener("textoDesencriptado", function() {
    if (textArea.value.length > 0) {
        textArea.style.backgroundImage = "none";
    }
});



