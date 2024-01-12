import './Login.css'
import Input from '../../components/Button/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Botton';

const Login = () => {

    const [login, setUser] = useState()
    const [password, setPassword] = useState()
    const [errorLogin, setErrorLogin] = useState();

    const navigate = useNavigate()

    const onChangeUser = (event) => {
        setUser(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const onSubmit = async () => {
      try{
            const response = await fetch('http://localhost:8080/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                login,
                password,
              }),
            });

            if (response.ok) {
                const data = await response.json();
                const authToken = data.token
                console.log('Token recebido:', authToken) //Retirar depois o Token
                navigate('/Dashboard')
                } else {
                  const data = await response.json();
                  setErrorLogin(data.error || 'Erro de login');
                  console.log("Erro no login")
                }
              } catch (error) {
                setErrorLogin('Login ou senha Incorreta');
                console.error('Erro de rede:', error);
              }
            
        console.log(login, password)
    }

    return (
      <div className='container'>
        <div className='formContainer'>
          <Input
            placeholder='Login'
            name='UserInput'
            id='UserInput'
            value={login}
            onChange={onChangeUser}
          />
          <Input
            placeholder='Senha'
            type='password'
            name='passwordInput'
            id='passwordInput'
            value={password}
            onChange={onChangePassword}
          />
          <p>
            <Button onClick={onSubmit} text='Entrar' />
          </p>
        </div>
        <div>
          {errorLogin && <p className="error">{errorLogin}</p>}
        </div>
      </div>
      
    );
    
}

export default Login;