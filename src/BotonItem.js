import { useState } from "react";

const ItemButton = (props) => {
    
    const item = props.item;
    const [oculto, setOculto] = useState(true);
    const [deshabilitado, setDeshabilitado] = useState(false);

    const triggerClickeo = () => {
        setOculto(false);
        const event = new CustomEvent('clickBotonItem', { detail : item});
        document.dispatchEvent(event);
    }

    document.addEventListener("puntajeAcierto", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i == item)){
            setDeshabilitado(true);
        }
    });

    document.addEventListener("puntajeErrada", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i == item)){
            setOculto(true);
        }
    });

    return(
        <button className="btn btn-primary rounded-0" 
                type="button" 
                disabled={deshabilitado} 
                onClick={triggerClickeo}>{oculto? "X" : item}</button>
    )
}

export default ItemButton;