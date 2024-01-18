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
                <a href='/' className='icon'> Dashboard</a>
                <ul>
                    <li>
                        <a href='/aba01'> Aba01 </a>
                    </li>
                    <li>
                        <a href='/aba02'> aba02 </a>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}


export default Dashboard;