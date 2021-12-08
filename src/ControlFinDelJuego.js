import { useState } from "react";

const ControlFinDelJuego = (props) => {

    const dimension = props.dimension;
    const [fichasJugadas, setFichasJugadas] = useState(2); 

    const finalizarJuego = () => {
        const event = new Event('finDelJuego');
        document.dispatchEvent(event);
    }

    document.addEventListener("puntajeAcierto", (info) => {
        setFichasJugadas(fichasJugadas+2);
        if(fichasJugadas == dimension*dimension){
            finalizarJuego();
        }
    })

    return null;
}

export default ControlFinDelJuego;