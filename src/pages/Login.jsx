import './Login.css'
import Input from '../components/Input';
import Botton from '../components/Botton';
import { useState } from 'react';

const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordError, setPasswordError] = useState()

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        const passwordValue = event.target.value
        setPassword(passwordValue)
        if(passwordValue.length >= 6) {
            setPasswordError()
        } else {
            setPasswordError(" A senha deve conter pelo menos 6 caracteris")
        }
    }

    const onSubmit = () => {
        console.log(email, password)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                    label="Email "
                    name="emailInput"
                    value={email}
                    onChange={onChangeEmail}
                />
                <Input 
                    label="Senha "
                    type='password'
                    name="passwordInput"
                    value={password}
                    onChange={onChangePassword}
                    errorMessage={passwordError}
                />
                <p>
                    <Botton onclick={onSubmit} text="Entrar" />
                </p>
            </div>
        </div>
    );
}


export default Login;