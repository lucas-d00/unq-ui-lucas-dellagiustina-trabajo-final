import { useState } from "react";

const BotonItem = (props) => {
    
    const item = props.item;
    const id = props.id;
    const [oculto, setOculto] = useState(true);
    const [deshabilitado, setDeshabilitado] = useState(false);

    const triggerClickeo = () => {
        
        setOculto(false)
        const event = new CustomEvent('clickBotonItem', { detail : { id : id, item : item}});
        document.dispatchEvent(event)
        
    }

    document.addEventListener("puntajeAcierto", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i.id == id)){
            setDeshabilitado(true);
        }
    });

    document.addEventListener("puntajeErrada", (info) => {
        var parFicha = info.detail;
        if(parFicha.some((i) => i.id == id)){
            //Espera unos milisegundos antes de volver a esconder la ficha
            setTimeout(() => setOculto(true), 500);
        }
    });

    return(
        <button className="btn btn-primary rounded-0" 
                type="button" 
                disabled={deshabilitado} 
                onClick={triggerClickeo}>{oculto? "X" : item}</button>
    )
}

export default BotonItem;