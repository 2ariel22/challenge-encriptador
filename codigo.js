
let incriptar = document.getElementById("encriptar");
let desencriptar = document.getElementById("desencriptar");
let aside = document.getElementsByClassName("aside")

incriptar.addEventListener("click", function() {
    aside[0].style.visibility = "hidden";
});




desencriptar.addEventListener("click", function() {
    aside[0].style.visibility = "visible";

});
