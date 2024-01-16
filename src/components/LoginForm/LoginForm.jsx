import React from 'react';
import './LoginForm.css'
import Input from '../../components/Button/Input';
import Button from '../../components/Button/Button';

const LoginForm = ({ login, password, onChangeLogin, onChangePassword, onSubmit }) => {
  return (
    <div className='formContainer1'>
      <Input
        placeholder='Login:'
        name='LoginInput'
        value={login}
        onChange={onChangeLogin}
      />
      <Input
        placeholder='Senha:'
        type='password'
        name='passwordInput'
        value={password}
        onChange={onChangePassword}
      />
      <p>
        <Button onClick={onSubmit} text='Entrar' />
      </p>
    </div>
  );
}

export default LoginForm;
