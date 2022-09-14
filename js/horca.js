//Selectores
let palabras = ["ALURA","ORACLE","COCIENCIA","ESFUERZO","COMPRENSION"]
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

//palabraSecreta

function escojerPalabraSecreta (){
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

//iniciar juego
function iniciarJuego(){

    document.getElementById("desaparece").style.display = "none";
    escojerPalabraSecreta ();
}