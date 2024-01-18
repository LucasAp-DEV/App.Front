import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Aba02 = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/Aba01");
    }


    return (
        <div>
            <Button onClick={rotas} text='Aba01' />
        </div>
    );
}


export default Aba02;