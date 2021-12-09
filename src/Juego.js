import { useParams } from "react-router-dom";
import FilaBotones from "./FilaBotones.js";
import Puntaje from "./Puntaje";
import ControlFinDelJuego from "./ControlFinDelJuego";

const Juego = () => {
    
    const {dimensionTablero} = useParams();
    const {modoDeJuego} = useParams();
    const dimension = parseInt(dimensionTablero);

    const sortRandom = (list) => {
        return (list.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }

    const setUpTablero = (dimension) => {
        const tablero = [];
        var coeff = 0;

        //Crea la mitad del tablero y luego hace una copia

        for(let i = 1; i <= dimension / 2; i++){
            var nuevaFila = [];
            for(let i = 1; i <= dimension; i++){
                nuevaFila.push(i + (coeff * dimension));
            }
            tablero.push(nuevaFila);
            coeff ++;
        }

        var tableroCopia = tablero;

        //Devuelve el tablero completo con el orden de las fichas aleatorio
        return tablero.concat(tableroCopia).map(sortRandom);
    }

    var tableroDeJuego = setUpTablero(dimension);

    return(
        <div>
            <div className="container-fluid">
                       
            </div>
            <div className="container">
                {tableroDeJuego.map((fila, i) => (
                    <FilaBotones nroFila={i} items={fila} dimensionTablero={dimension}/>
                ))}
            </div>
            <div>
                <Puntaje modoDeJuego={modoDeJuego}/>
            </div>
            <ControlFinDelJuego dimension={dimension} tablero={tableroDeJuego}/>
        </div>
    )
}

export default Juego;