import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Aba01 = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/Aba02");
    }


    return (
        <div>
            <Button onClick={rotas} text='Aba02' />
            <h1> Teste </h1>
        </div>
    );
}


export default Aba01;