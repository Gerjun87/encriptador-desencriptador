/*
e-enter
o-ober
i-ines
a-ai
u-ufat
*/

function encriptar(){

    let texto = document.getElementById("input-texto").value.toLowerCase();

    //i Es parar que afecte tanto mayúsculas como minúsculas

    //g Es parar toda la línea u oración

    //m Es para que afecte a múltiples líneas o párrafos

    let txtCifrado = texto.replace(/e/igm,"enter");
    txtCifrado = txtCifrado.replace(/o/igm,"ober");
    txtCifrado = txtCifrado.replace(/i/igm,"ines");
    txtCifrado = txtCifrado.replace(/a/igm,"ai");
    txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.querySelector(".imagen-derecha").style.display = "none";
    document.querySelector(".texto-derecha").style.display = "none";
    document.querySelector(".texto-area-derecho").innerHTML = txtCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
}

function desencriptar(){

    let texto = document.getElementById("input-texto").value.toLowerCase();

    //i Es parar que afecte tanto mayúsculas como minúsculas

    //g Es parar toda la línea u oración

    //m Es para que afecte a múltiples líneas o párrafos

    let txtCifrado = texto.replace(/enter/igm,"e");
    txtCifrado = txtCifrado.replace(/ober/igm,"o");
    txtCifrado = txtCifrado.replace(/ines/igm,"i");
    txtCifrado = txtCifrado.replace(/ai/igm,"a");
    txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.querySelector(".imagen-derecha").style.display = "none";
    document.querySelector(".texto-derecha").style.display = "none";
    document.querySelector(".texto-area-derecho").innerHTML = txtCifrado;
    document.querySelector("#copiar").style.display = "show";
    document.querySelector("#copiar").style.display = "inherit";
}

function copiar(){
    let contenido = document.querySelector(".texto-area-derecho");
    contenido.select();
    document.execCommand("copy");
}