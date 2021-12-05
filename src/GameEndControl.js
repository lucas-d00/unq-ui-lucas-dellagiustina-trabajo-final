import { useState } from "react";

const GameEndControl = (props) => {

    const dimension = props.dimension;
    const [fichasJugadas, setFichasJugadas] = useState(2); 

    const triggerGameEnd = () => {
        const event = new Event('finDelJuego');
        document.dispatchEvent(event);
    }

    document.addEventListener("puntajeAcierto", (info) => {
        setFichasJugadas(fichasJugadas+2);
        if(fichasJugadas == dimension*dimension){
            triggerGameEnd();
        }
    })

    return null;
}

export default GameEndControl;