import ItemButton from "./BotonItem";

const ButtonRow = (props) => {

    const items = props.items;

    return(
        <div>
            <div className="col">
                {items.map((item) => (
                    <ItemButton item={item}/>
                ))}
            </div>
        </div>
    )
}

export default ButtonRow;
