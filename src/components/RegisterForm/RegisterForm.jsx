import Button from '../Button/Button';
import Input from '../Button/Input';

const RegisterForm = ({ login, password, role, onSubmit, onChangeLogin, onchangeRole, onChangePassword }) => {

    return (
        <div className='register'>
                <Input
                placeholder={"Digite um login"}
                type='text'
                name='LoginInput'
                value={login}
                onChange={onChangeLogin}
            />
                <Input
                placeholder={"Digite uma senha"}
                type='password'
                name='passwordInput'
                value={password}
                onChange={onChangePassword}
            />
                <Input
                placeholder={"Digite uma senha"}
                type='password'
                name='passwordInput'
                value={password}
                onChange={onChangePassword}
            />
                <Input
                placeholder={"Digite uma senha"}
                type='password'
                name='passwordInput'
                value={password}
                onChange={onChangePassword}
            />
                <Input
                placeholder={"Digite uma senha"}
                type='password'
                name='passwordInput'
                value={password}
                onChange={onChangePassword}
            />
                <Input
                placeholder={"Digite uma senha"}
                type='password'
                name='passwordInput'
                value={password}
                onChange={onChangePassword}
            />
            <h3>Cadastrar como proprietario ?</h3>
            <input
                type='checkbox'
                name='roleInput'
                value={role}
                onChange={onchangeRole}
            />
            <p>
                <Button onClick={onSubmit} text='Registrar-se' />
            </p>

            <div style={{ marginTop:'8px'}}>
                <a href="/login" className="forgotPassword">
                    Cancelar Registro
                </a>
            </div>
        </div>
    );
}

export default RegisterForm
