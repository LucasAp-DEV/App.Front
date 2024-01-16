import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = () => {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [errorLogin, setErrorLogin] = useState();
    const [trueLogin, setTrueLogin] = useState("");

    const navigate = useNavigate()

    const onChangeLogin = (event) => {
        setLogin(event.target.value)
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
                setTrueLogin('Login Realizado.')
                navigate('/Dashboard')
                } else {
                  const data = await response.json();
                  setErrorLogin(data.error || 'Erro de login');
                }
              } catch (error) {
                setErrorLogin('Login ou senha Incorreta');
                console.error('Erro de rede:', error);
              }
            
        console.log(login, password)
    }

    return (
      <div className='container'>
            <div className='login'>
              <LoginForm
              login={login}
              password={password}
              onChangeLogin={onChangeLogin}
              onChangePassword={onChangePassword}
              onSubmit={onSubmit}
              />
            </div> 
        <div>
          {errorLogin && <p className="error">{errorLogin}</p> }
          {trueLogin && <p className="error">{trueLogin}</p> }
        </div>
      </div>
      
    );
    
}

export default Login;