import { useNavigate} from "react-router-dom";
import { useState } from "react";
import BotonMenu from "../auxiliares/BotonMenu.js";
import Opciones from "../auxiliares/Opciones.js";

const MainMenu = () => {

    const [dimension, setDimension] = useState("4");
    const [visibilidadOpciones, setVisibilidadOpciones] = useState(false);
    const navigate = useNavigate();

    document.addEventListener("dimensionGrandeSet", (info) => {
        setDimension(info.detail);
    });

    document.addEventListener("dimensionChicaSet", (info) => {
        setDimension(info.detail);
    });

    const irAJuegoSolo = () => {
        navigate("/jugar/solo/"+ dimension);
    }
    const irAJuegoDos = () => {
        navigate("/jugar/versus/"+ dimension);
    }
    const toggleOpciones = () => setVisibilidadOpciones(!visibilidadOpciones);

    return(
        <div className="container-fluid menu">
            <h1 className="textoMenu">MemoTest</h1>
            <BotonMenu funcion={irAJuegoSolo} texto="Jugar solo"/>
            <BotonMenu funcion={irAJuegoDos} texto="Jugar 2 vs 2"/>
            <BotonMenu funcion={toggleOpciones} texto="Opciones"/>
            {visibilidadOpciones? <Opciones/> : ""}
        </div>
    )


}

export default MainMenu;