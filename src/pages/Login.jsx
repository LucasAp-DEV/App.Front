import './Login.css'
import React from 'react'

const User = () => {

    const cabecario = () => {
        return(
            <div className='destaque'>
                <img src="sesmt.jpg" alt="Minha imagen" width="200" height="175"/>
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