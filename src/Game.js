import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ItemButton from "./ItemButton";

const Game = () => {

    var parFicha = [];
    var [fichasClickeadas, setFichasClickeadas] = useState(0);
    var [puntaje, setPuntaje] = useState(0);
    var [gameOver, setGameOver] = useState(false);
    const location = useLocation();
    const dimension = parseInt(location.state);

    useEffect(() => {
        document.addEventListener("itemButtonClick", (info) => {
            checkScore(info.detail);
        });
    }, []);

    const checkScore = (n) => {
        setFichasClickeadas(fichasClickeadas++);
        //Chequea si todas las fichas fueron clickeadas
        if(fichasClickeadas == dimension*dimension){
            console.log("Game over");
            setGameOver(true);
        }

        if(parFicha.length == 0){
            parFicha.push(n);
        } else {
            if(parFicha.every((it) => it == n)){
                setPuntaje(puntaje++)
                parFicha = [];
                
            } else {
                setPuntaje(puntaje--)
                parFicha = [];
            }
        }
    }

    const sortRandom = (list) => {
        return (list.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value))
    }

    const setUpTablero = (dimension) => {
        const tablero = [];
        const primeraMitad = [];
        const segundaMitad = [];

        for(let i = 1; i <= dimension; i++){
            primeraMitad.push(i);
            segundaMitad.push(i+dimension);
        }

        //Duplica las fichas
        const primeraMitadDup = [].concat(primeraMitad);
        const segundaMitadDup = [].concat(segundaMitad);
        
        
        //Las ordena aleatoriamente y las agrega al tablero
        tablero.push(primeraMitad);
        tablero.push(segundaMitad);
        tablero.push(sortRandom(primeraMitadDup));
        tablero.push(sortRandom(segundaMitadDup));

        console.log(tablero);

        return tablero;
    }

    return(
        <div>
            <div className="container-fluid">
                <text className="scoreText">Puntaje:{puntaje}</text>       
            </div>
            <div className="container">
                {setUpTablero(dimension).map((fila) => (
                    <div className="col">
                        {fila.map((item) => (
                            <ItemButton id="item-button" item={item}/>
                        ))}
                    </div>
                ))}
            </div>
            <div>
                {gameOver ? `Fin. Puntaje:${puntaje}` : "En progreso"}
            </div>
        </div>
    )
}

export default Game;