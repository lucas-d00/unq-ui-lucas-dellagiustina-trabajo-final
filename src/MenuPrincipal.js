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

    const goToGame = () => {
        navigate("/jugar/"+ dimension);
    }
    const goToOptions = () => navigate("options");

    return(
        <div>
            <h1>MemoTest</h1>
            <button type="button" className="btn btn-primary" onClick={goToGame}>Jugar</button>
            <button type="button" className="btn btn-secondary" onClick={goToOptions}>Opciones</button>
            <Outlet/>
        </div>
    )


}

export default MainMenu;