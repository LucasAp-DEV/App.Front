import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Aba02 = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/usuarios");
    }


    return (
        <div>
            <Button onClick={rotas} text='Usuarios' />
        </div>
    );
}


export default Aba02;