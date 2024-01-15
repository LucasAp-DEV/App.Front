import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Botton';


const Aba02 = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/");
    }


    return (
        <div>
            <Button onClick={rotas} text='Login' />
        </div>
    );
}


export default Aba02;