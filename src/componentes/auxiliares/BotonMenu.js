
const BotonMenu = (props) => {

    const funcion = props.funcion
    const texto = props.texto;

    return(
        <div class="row">
            <button type="button" 
                className="container-fluid btn btn-primary btn-lg btn-block rounded-0 botonMenu" 
                onClick={funcion}>{texto}</button>
        </div>
    )
}

export default BotonMenu;