//variables
let texto;
let textoEncriptado;
let textarea;

function encriptar() {
    texto = document.getElementById("textareain").value;
    textoEncriptado = texto
        .replace(/m/g, "4d")
        .replace(/e/g, "m8")
        .replace(/s/g, "3f")
        .replace(/l/g, "d1")
        .replace(/i/g, "7j")
        .replace(/a/g, "l9")
        .replace(/o/g, "6v")
        .replace(/u/g, "s5")
        .replace(/r/g, "o2");
    document.getElementById("etextout").textContent = textoEncriptado;
    document.getElementById("candado").src = "./asset/Close.png";
}

function desencriptar() {
    texto = document.getElementById("textareain").value;
    textoEncriptado = texto
        .replace(/4d/g, "m")
        .replace(/3f/g, "s")
        .replace(/m8/g, "e")
        .replace(/7j/g, "i")
        .replace(/d1/g, "l")
        .replace(/l9/g, "a")
        .replace(/6v/g, "o")
        .replace(/s5/g, "u")
        .replace(/o2/g, "r");
    document.getElementById("etextout").textContent = textoEncriptado;
    document.getElementById("candado").src = "./asset/Open.png";
}

function copiar() {
    texto = document.getElementById("etextout").textContent;
    textarea = document.createElement("textarea");
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
}
