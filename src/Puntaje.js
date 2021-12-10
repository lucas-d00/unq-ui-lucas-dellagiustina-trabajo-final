import { useState } from "react";

const Puntaje = (props) => {

    var parFicha = [];
    var modoDosJugadoresActivo = props.modoDeJuego == "versus";
    var [turno, setTurno] = useState(1);
    var [puntajes, setPuntajes] = useState([0,0]);
    var [gameOver, setGameOver] = useState(false);

    const cambiarTurno = () => {
        if(turno == 1){
            setTurno(2);
        }  else {
            setTurno(1);
        }
    }

    const incrementarPuntaje = () => {
        if(turno == 1){
            var puntajeJugadorUno = puntajes[0] + 1;
            var puntajeJugadorDos = puntajes[1];
            setPuntajes([puntajeJugadorUno, puntajeJugadorDos]);
        } else{
            var puntajeJugadorDos = puntajes[1] + 1;
            var puntajeJugadorUno = puntajes[0];
            setPuntajes([puntajeJugadorUno, puntajeJugadorDos]);
        }
    }

    const decrementarPuntaje = () => {
        if(turno == 1){
            var puntajeJugadorUno = puntajes[0] - 1;
            var puntajeJugadorDos = puntajes[1];
            setPuntajes([puntajeJugadorUno, puntajeJugadorDos]);
        } else{
            var puntajeJugadorDos = puntajes[1] - 1;
            var puntajeJugadorUno = puntajes[0];
            setPuntajes([puntajeJugadorUno, puntajeJugadorDos]);
        }
    }

    const acierto = () => {
        incrementarPuntaje();
        const event = new CustomEvent('puntajeAcierto', { detail : parFicha});
        document.dispatchEvent(event);
    }

    const errada = () => {
        decrementarPuntaje();
        const event = new CustomEvent('puntajeErrada', { detail : parFicha});
        document.dispatchEvent(event);
    }

    const checkPuntaje = (fichaClickeada) => {
        
        parFicha.push(fichaClickeada);
        if(parFicha.length > 1) {
            if(parFicha.some((it) => it.item == fichaClickeada.item && !(it.id == fichaClickeada.id))){
                acierto();
            } else {
                errada();
            }
            if(modoDosJugadoresActivo) cambiarTurno();
            parFicha = [];
        }
    }

    document.addEventListener("clickBotonItem", (info) => {
        checkPuntaje(info.detail);
        
    });

    document.addEventListener("finDelJuego", () => {
        setGameOver(true);
    });

    return(
        <div className="container-fluid">
            <div className="puntajes">
                <p>
                {modoDosJugadoresActivo ? `Puntaje Jugador Uno: ${puntajes[0]} --- Puntaje Jugador Dos: ${puntajes[1]}` : `Puntaje: ${puntajes[0]}`}
                </p>
            </div>
            <div className="estadoDelJuego">
                <p>
                    {gameOver ? 
                        `Fin del juego. 
                            ${modoDosJugadoresActivo? 
                                `Ganador: ${puntajes[0] > puntajes[1]? "Jugador 1" : "Jugador 2"}` : `Puntaje: ${puntajes}`}` 
                        : "Juego en progreso." }
                </p>
            </div>
        </div>
    )
}

export default Puntaje;