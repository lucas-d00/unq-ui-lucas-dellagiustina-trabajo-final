import BotonItem from "./BotonItem";

const FilaBotones = (props) => {

    const items = props.items;
    const nroFila = props.nroFila;
    const dimension = props.dimensionTablero;
    
    const indices = () => {
        var indices = [];
        for(let i=1; i <= items.length; i++){
            indices.push(i);
        }
        
        return indices;
    }

    return(
        <div>
            <div className="col">
                {indices().map((i) => (
                    <BotonItem id={dimension*nroFila + i} item={items[i-1]}/>
                ))}
            </div>
        </div>
    )
}

export default FilaBotones;
