import RegisterForm from '../../components/RegisterForm/RegisterForm'
import './Register.css'
import { useState } from 'react';
import { api } from '../../api';

const Register = () => {

  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState('USER');
  const [errorRegister, setErrorRegister] = useState();

  const onChangeLogin = (event) => {
    setLogin(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const onChangeRole = () => {
    setRole((currentRole) => (currentRole === 'USER' ? 'ADMIN' : 'USER'));
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await api.post('auth/register', {
          login,
          password,
          role,
        },
      );
      
      console.log('Cadastro bem-sucedido:', response.data);
      setErrorRegister('Registrado com Sucesso');

    } catch (error) {
      setErrorRegister('Erro de cadastro');
      console.error('Erro no cadastro:', error);
    }

    console.log(login, password, role);
  }

  return (
    <div>
      <RegisterForm
        login={login}
        password={password}
        role={role}
        onChangeLogin={onChangeLogin}
        onChangePassword={onChangePassword}
        onchangeRole={onChangeRole}
        onSubmit={onSubmit}
      />
      <div>
        {errorRegister && <p className="error">{errorRegister}</p> }
      </div>
    </div>

  )
}

export default Register





