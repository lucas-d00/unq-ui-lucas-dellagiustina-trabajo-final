import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import ButtonRow from "./ButtonRow.js";
import Score from "./Score";
import GameEndControl from "./GameEndControl";

const Game = () => {

    const location = useLocation();
    const dimension = parseInt(location.state);

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
                       
            </div>
            <div className="container">
                {setUpTablero(dimension).map((fila) => (
                    <ButtonRow items={fila}/>
                ))}
            </div>
            <div>
                <Score dimension={dimension}/>
            </div>
            <GameEndControl dimension={dimension}/>
        </div>
    )
}

export default Game;