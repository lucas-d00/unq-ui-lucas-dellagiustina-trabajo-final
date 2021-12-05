import { useState } from "react";

const ItemButton = (props) => {
    
    const item = props.item;
    const [hidden, setHidden] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    const triggerClickEvent = () => {
        setHidden(false);
        const event = new CustomEvent('itemButtonClick', { detail : item});
        document.dispatchEvent(event);
    }

    document.addEventListener("puntajeAcierto", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i == item)){
            setIsDisabled(true);
        }
    });

    document.addEventListener("puntajeErrada", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i == item)){
            setHidden(true);
        }
    });

    return(
        <button className="btn btn-primary rounded-0" 
                type="button" 
                disabled={isDisabled} 
                onClick={triggerClickEvent}>{hidden? "X" : item}</button>
    )
}

export default ItemButton;