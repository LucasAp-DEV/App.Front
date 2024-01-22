import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Usuarios = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/menu");
    }


    return (
        <div>
            <Button onClick={rotas} text='Menu' />
            <h1> Enviar para Menu </h1>
        </div>
    );
}


export default Usuarios;