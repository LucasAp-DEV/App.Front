import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import axios from 'axios';

const Login = () => {

    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const [errorLogin, setErrorLogin] = useState();

    const navigate = useNavigate()

    const onChangeLogin = (event) => {
        setLogin(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const onSubmit = async () => {
      try {
        const response = await axios.post('http://localhost:8080/auth/login', {
          login,
          password,
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

            if (response.status === 200) {
                const authToken = response.data.token;
                localStorage.setItem("token", authToken);
                navigate('/menu');
                }else {
                  const data = await response.json();
                  setErrorLogin(data.error || 'Erro de login');
                  console.log("Erro no login")
                }
                  } catch (error) {
                    setErrorLogin('Login ou senha Incorreta');
                    console.error('Erro de rede:', error);
                  }
            
        console.log(login, password);
    }

    setTimeout(() => {
      setErrorLogin('');
    }, 4000);

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
        </div>
      </div>
      
    );
    
}

export default Login;