import { useState } from "react";

const Puntaje = (props) => {

    var parFicha = [];
    var [puntaje, setPuntaje] = useState(0);
    var [gameOver, setGameOver] = useState(false);

    const incrementarPuntaje = () => {
        setPuntaje(puntaje+1);
    }

    const decrementarPuntaje = () => {
        setPuntaje(puntaje-1);
    }

    const checkPuntaje = (n) => {

        parFicha.push(n);
        if(parFicha.length > 1) {
            if(parFicha.every((it) => it == n)){
                //Acierto
                incrementarPuntaje();
                const event = new CustomEvent('puntajeAcierto', { detail : parFicha});
                document.dispatchEvent(event);
                parFicha = [];
                
            } else {
                //Errada
                decrementarPuntaje();
                const event = new CustomEvent('puntajeErrada', { detail : parFicha});
                document.dispatchEvent(event);
                parFicha = [];
            }
        }

        
    }

    document.addEventListener("clickBotonItem", (info) => {
        checkPuntaje(info.detail);
    });

    document.addEventListener("finDelJuego", () => {
        setGameOver(true);
    });

    return(
        <div>
            <div>
                <p>Puntaje: </p> {puntaje}
            </div>
            <div>
                {gameOver? `Fin del juego. Puntaje: ${puntaje}` : "En progreso"}
            </div>
        </div>
    )
}

export default Puntaje;