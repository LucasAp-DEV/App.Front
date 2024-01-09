import './Login.css'
import Input from '../components/Input';
import Botton from '../components/Botton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const onChangeUser = (event) => {
        setUser(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmit = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user,
                password,
              }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                navigate('/Pag1')
              }
            } catch (error) {
              console.error('Erro de rede:', error);
            }
      
        
        console.log(user, password)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                    placeholder={"Usuário"}
                    name="UserInput"
                    value={user}
                    onChange={onChangeUser}
                />
                <Input 
                    placeholder={"Senha"}
                    type='password'
                    name="passwordInput"
                    value={password}
                    onChange={onChangePassword}
                />
                <p>
                    <Botton onclick={onSubmit} text="Entrar" />
                </p>
            </div>
        </div>
    );
}


export default Login;