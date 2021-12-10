
const Opciones = () => {

    const setDimensionGrande = () => {
        const event = new CustomEvent('dimensionGrandeSet', { detail : "6"});
        document.dispatchEvent(event);
    }

    const setDimensionChica = () => {
        const event = new CustomEvent('dimensionChicaSet', { detail : "4"});
        document.dispatchEvent(event);
    }

    return(
        <div>
            <div className="row">
            <button type="button" className="container-fluid btn btn-secondary rounded-0 botonOpciones" onClick={setDimensionGrande}>Tablero Grande</button>
            </div>
            <div className="row">
            <button type="button" className="container-fluid btn btn-secondary rounded-0 botonOpciones" onClick={setDimensionChica}>Tablero Chico</button>
            </div>
        </div>
    )
}

export default Opciones;