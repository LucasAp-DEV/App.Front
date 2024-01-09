import './Login.css'
import Input from '../components/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Botton';

const Login = () => {

    const [name, setUser] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const onChangeUser = (event) => {
        setUser(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const rotas = () => {
      navigate('/Dashboard')
    }
    

    const onSubmit = async () => {
        try {
            const response = await fetch('http://localhost:8080/user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
              }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data.message);
                navigate('/Dashboard')
              } else {
                console.error('Falha no login');
              }
            } catch (error) {
              console.error('Erro de rede:', error);
            }
        
        console.log(name)
    }

    return (
        <div className='container'>
            <div className='formContainer'>
                <Input
                    placeholder={"Usuário"}
                    name="UserInput"
                    value={name}
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
                    <Button onclick={onSubmit} text="Entrar" />
                </p>
            </div>
        </div>
    );
}


export default Login;