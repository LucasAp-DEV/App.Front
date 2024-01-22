import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Menu = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/usuarios");
    }


    return (
        <div>
            <Button onClick={rotas} text='Usuarios' />
            <h1>Levar para Usuarios</h1>
        </div>
    );
}


export default Menu;