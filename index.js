
//variables para la botoneria y sus acciones visuales
let incriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let aside = document.getElementsByClassName("aside_centrado");
let texto_procesado = document.querySelector(".texto_procesado p")
texto_procesado.style.display = "none";





function encriptar_texto (aux){   
    let reglas ={
        "a":"ai",
        "e":"enter",
        "i":"imes",
        "o":"ober",
        "u":"ufat"
    }
    let texto_encriptado = aux.replace(/[aeiou]/g, function (match) {
        return reglas[match] || match;

    })
    return texto_encriptado;
    }

function desencriptar_texto(aux) {
    let reglas = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
      };
      
    let texto_desencriptado = aux.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        // Obtener el valor correspondiente a la clave en el objeto 'reglas'
        let valor = reglas[match];
        // Si se encuentra el valor, se devuelve la vocal original, de lo contrario, se devuelve el valor original
        return valor || match;
      });
    
      console.log(texto_desencriptado);
      return texto_desencriptado;

  }
  



//funciones de botones
incriptar.addEventListener("click", function() {
    aside[0].style.display = "none";
    let textarea = document.getElementById("textarea");
    let texto_procesado2 = document.querySelector(".texto_procesado p")
    texto_procesado2.textContent= encriptar_texto(textarea.value);
    texto_procesado2.style.display = "inline";
});

desencriptar.addEventListener("click", function() {
    aside[0].style.display = "none";
    let texto_procesado2 = document.querySelector(".texto_procesado p")
    let textarea = document.getElementById("textarea");
    texto_procesado2.textContent= desencriptar_texto(textarea.value);
    texto_procesado2.style.display = "inline";
});
