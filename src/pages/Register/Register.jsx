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
    setRole((currentRole) => (currentRole === 'USER' ? 'ADMIN' : 'USER')); //ALTERAR ROLE ENTRE ADMIN E USER
  }

  const onSubmit = async () => {
    
    try {
      const response = await api.post('auth/register', {
        login,
        password,
        role,
      },
      );

      if (response.status === 200) {
        console.log('Cadastro bem-sucedido:', response.data);
        setErrorRegister('Registrado com Sucesso');

        setLogin("");
        setPassword("");
        
      } else {
        const data = await response.json();
        setErrorRegister(data.error || 'Erro ao Registrar usuario');
        console.log("Erro ao reristrar usuario");
      }

    } catch (error) {
      setErrorRegister('Erro no Registro, insira as credenciais');
      console.error('Erro no cadastro:', error);
    }

    console.log(login, password, role);

  }

  return (
    <div className="register-container">
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
        {errorRegister && <p className="error">{errorRegister}</p>}
      </div>
    </div>

  )
}

export default Register





