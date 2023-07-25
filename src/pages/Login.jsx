import './Login.css'
import React from 'react'

const User = () => {

    const form = () => {
        return(
            <div>
                <img src="sesmt.jpg" alt="Minha imagen" width="200" height="175"/>
            </div>
        )
    }
    
    return (
            <div>
                {form()}
            </div>
        );
    }


export default User;