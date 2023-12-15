const Input = ({label, inputName, errorMessage, value, onChange, type = "text", placeholder}) => {
    return (
        <div>
            <div>
                <label for={inputName}>{label}</label>
                <input 
                    type={type}
                    id={inputName}
                    name={inputName}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>
            {
                errorMessage ? (
                    <p className='errorMessage'>{errorMessage}</p>
                ) : <></>
            }
        </div>
    );
}

export default Input;