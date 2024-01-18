import './Dashboard.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Dashboard = () => {

    const navigate = useNavigate()

    const rotas = () => {
        navigate("/Aba01");
    }


    return (
        <div>
            <div className='dashboard'>
                <Button onClick={rotas} text='Login' />
                <h1>Dashborad</h1>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}


export default Dashboard;