import './Login.css'
import React from 'react'

const User = () => {

    const cabecario = () => {
        return(
            <div className='cabecario1'>
                <div>
                    <h1> Teste, teste  </h1> 
                </div>
                <div>
                    <h1>Teste 2 </h1>
                </div>
            </div>
        )
    }
    
    return (
            <div>
                {cabecario()}
            </div>
        );
    }


export default User;