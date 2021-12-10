import { useParams, useNavigate } from "react-router-dom";
import FilaBotones from "../auxiliares/FilaBotones.js";
import Puntaje from "../auxiliares/Puntaje";
import ControladorFinDelJuego from "../auxiliares/ControladorFinDelJuego";

const Juego = () => {
    
    const navigate = useNavigate();
    const {dimensionTablero} = useParams();
    const {modoDeJuego} = useParams();
    const dimension = parseInt(dimensionTablero);

    const sortRandom = (list) => {
        return (list.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }

    const setUpTablero = (dimension) => {
        const tableroInicial = [];
        
        //Crea el tablero con los par de números iguales
        for(let i = 1; i <= (dimension * dimension) / 2; i++){
            tableroInicial.push(i);
            tableroInicial.push(i);
        }

        //Randomiza el orden de los números
        const tableroRandom = sortRandom(tableroInicial);
        const tableroFinal = [];

        for(let i=1; i <= dimension; i++){
            //Agrupa los items por filas dependiendo de la dimensión
            tableroFinal.push(tableroRandom.splice(0, dimension));
        }

        return tableroFinal;
    }

    const irAlMenu = () => {
        navigate("/");
        window.location.reload();
    }


    var tableroDeJuego = setUpTablero(dimension);

    return(
        <div className="container-fluid juego">
            <div className="container-fluid tablero">
                {tableroDeJuego.map((fila, i) => (
                    <FilaBotones nroFila={i} items={fila} dimensionTablero={dimension}/>
                ))}
            </div>
            <div className="container-fluid puntaje">
                <Puntaje modoDeJuego={modoDeJuego}/>
            </div>
            <ControladorFinDelJuego dimension={dimension} tablero={tableroDeJuego}/>
            <button type="button" className="btn btn-primary" onClick={irAlMenu}>Volver al menú principal</button>
        </div>
    )
}

export default Juego;