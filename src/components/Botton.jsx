import React from "react";
import './Button.css'

const Button = ({ onclick, text}) => {
    return (
        <button onClick={onclick}>
            {text}
        </button>
    )
}

export default Button