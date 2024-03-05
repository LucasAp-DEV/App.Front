import React from "react";

const ErrorMessage = ({ onClick, text, text1}) => {
    return (
        <div>
            <h1>{text1}</h1>
            <button onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default ErrorMessage;