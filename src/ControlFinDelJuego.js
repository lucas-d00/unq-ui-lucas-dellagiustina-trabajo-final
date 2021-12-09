import { useState } from "react";

const ControlFinDelJuego = (props) => {

    const dimension = props.dimension;
    const tablero = props.tablero;
    const [fichasJugadas, setFichasJugadas] = useState(2); 

    const previewTablero = () => {
        //Una pequeña preview del tablero para ayudar al jugador cuando
        //comienza el juego.
        var preview = tablero.toString()
        
        return preview;
    }

    const finalizarJuego = () => {
        const event = new Event('finDelJuego');
        document.dispatchEvent(event);
    }

    document.addEventListener("puntajeAcierto", (info) => {
        info.stopPropagation();
        setFichasJugadas(fichasJugadas+2);
        if(fichasJugadas == dimension*dimension){
            finalizarJuego();
        }
    })

    return (
        <p>
            {fichasJugadas == 2? `Preview: ${previewTablero()}` : ""}
        </p>
    );
}

export default ControlFinDelJuego;