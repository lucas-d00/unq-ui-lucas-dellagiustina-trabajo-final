import { useState } from "react";

const ItemButton = (item) => {

    const [text, setText] = useState("X");
    const [isDisabled, setIsDisabled] = useState(false);

    const changeText = () => {
        setText(item.item)
        setIsDisabled(true);
        const event = new CustomEvent('itemButtonClick', { detail : item.item});
        document.dispatchEvent(event);
    }

    return(
        <button className="btn btn-primary rounded-0" type="button" disabled={isDisabled} onClick={changeText}>{text}</button>
    )
}

export default ItemButton;