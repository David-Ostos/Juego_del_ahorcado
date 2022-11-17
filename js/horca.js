//Selectores
let palabras = ["ALURA","ORACLE","COCIENCIA","ESFUERZO","COMPRENSION"]
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = [];
let errores = 8;

//palabraSecreta

function escojerPalabraSecreta (){
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}

function comprobarLetra(key){ /* Se utiliza el parametro (key) para poder tomar las letras o numeros del teclado */
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){/* aqui se sta haceindo una validacion para comprobar que las letras del alfabeto de la a-z en mayusculas */
    letras.phus(key); /* para enpujar el valor */
    console.log(key);
    return estado; /* para devolver el valor*/
    }else{
        estado=true;
        console.log(key);
        return estado;
    }

}

function anadirLetraIncorrecta(){
    errores -=1;
    console.log(errores)

}
//iniciar juego
function iniciarJuego(){

    document.getElementById("desaparece").style.display = "none";
    
    escojerPalabraSecreta ();
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => { /* esta es una funcion con flecha espara decri que hay una funcion adentro de otra funcion y se representa  de esta manera => y aque se esat diceindo que va a funcionar con la tecla precionada del teclado se activa */
        let letra= e.key.toUpperCase(); /* aqui es para poner la letras en mayusculas*/

        if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
            for(let i = 0; i < palabraSecreta.length; i++) {
                if(palabraSecreta[i] === letra) {
                    escribirLetraCorrecta(i);
               }
        
            }
        }else{
        anadirLetraIncorrecta(letra);
        escribirLetraIncorrecta(letra,errores);}
    }
}

function agregarPalabra(){

    document.getElementById("desaparece").style.display = "none";

}