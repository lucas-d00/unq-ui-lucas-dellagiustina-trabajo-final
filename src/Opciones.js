
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
            <h1>Opciones</h1>
            <button type="button" className="btn btn-primary" onClick={setDimensionGrande}>Tablero Grande</button>
            <button type="button" className="btn btn-primary" onClick={setDimensionChica}>Tablero Chico</button>
        </div>
    )
}

export default Opciones;