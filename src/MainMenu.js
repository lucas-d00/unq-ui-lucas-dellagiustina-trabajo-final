import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router";

const MainMenu = () => {

    const dimension = "4";
    const navigate = useNavigate();

    const goToGame = () => navigate("/play", 
                            {state : dimension
                            });
    const goToOptions = () => navigate("options");
    const goToTutorial = () => navigate("howtoplay");

    return(
        <div>
            <h1>MemoTest</h1>
            <button type="button" className="btn btn-primary" onClick={goToGame}>Play</button>
            <button type="button" className="btn btn-secondary" onClick={goToOptions}>Options</button>
            <button type="button" className="btn btn-secondary" onClick={goToTutorial}>How to play</button>
            <Outlet/>
        </div>
    )


}

export default MainMenu;