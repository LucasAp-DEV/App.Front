import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Dashboard = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/Aba01");
    }


    return (
        <div>
            <Button onClick={rotas} text='Entrar' />
        </div>
    );
}


export default Dashboard;