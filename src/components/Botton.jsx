import React from "react";
import './Botton.css'

const Botton = ({ onclick, text}) => {
    return (
        <button onClick={onclick}>
            {text}
        </button>
    )
}

export default Botton