import { useNavigate} from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router";

const MainMenu = () => {

    const [dimension, setDimension] = useState("4");
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
    const irAOpciones = () => navigate("opciones");

    return(
        <div className="container-fluid">
            <h1>MemoTest</h1>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={irAJuegoSolo}>Jugar solo</button>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={irAJuegoDos}>Jugar 2vs2</button>
            <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={irAOpciones}>Opciones</button>
            <Outlet/>
        </div>
    )


}

export default MainMenu;