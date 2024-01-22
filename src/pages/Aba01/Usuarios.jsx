import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Usuarios = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/aba02");
    }


    return (
        <div>
            <Button onClick={rotas} text='Aba02' />
            <h1> Usuarios </h1>
        </div>
    );
}


export default Usuarios;