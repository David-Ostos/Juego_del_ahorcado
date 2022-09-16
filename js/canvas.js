function dibujarCanvas(){

    tablero.lineWidth = 8; 
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.STROKEsTYLE = "#8A3871";

    tablero.fillStyle = "transparent"
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();

}