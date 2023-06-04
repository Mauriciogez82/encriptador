const textArea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".area-mensaje");

textArea.value = "";
mensaje.value = "";

//CLAVES DE ENCRIP
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {

    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado;
    textArea.value = "";
    
    mensaje.style.backgroundImage ="none";
}

function btnDesencriptar() {

    const textEncriptado = Desencriptar(mensaje.value)
    textArea.value = textEncriptado;
    //textArea.value = "";
    
    mensaje.style.backgroundImage ="none";
}




function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }


    return stringEncriptada;

}

function Desencriptar(stringdesencriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringdesencriptada = stringdesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if (stringdesencriptada.includes(matrizCodigo[i][1])) {
            stringdesencriptada = stringdesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }


    return stringdesencriptada;

}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
