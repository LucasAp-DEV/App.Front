import { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Button/Input';
import './Registerform.css'

const RegisterForm = ({login, password, onSubmit, onChangeLogin, onChangePassword}) => {

    const [isAdmin, setIsAdmin] = useState(false);


    return (
            <div className='register'>
                <Input
                    placeholder={"Login:"}
                    name='LoginInput'
                    value={login}
                    onChange={onChangeLogin}
                />
                <Input
                    placeholder={"Senha:"}
                    type='password'
                    name='passwordInput'
                    value={password}
                    onChange={onChangePassword}
                />
                <label name="ADMIN"> ADMIN ? </label>
                <input name="ADMIN" type='checkbox' value={isAdmin} onChange={(e) => {
                    const value = e.target.value;
                    setIsAdmin((state) => !state)
                    console.log(value);
                     
                }} />
                <p>
                    <Button onClick={onSubmit} text='Registrar' />
                </p>
            </div>
      );
  }

export default RegisterForm
