import './Dashboard.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Dashboard = () => {

    const navigate = useNavigate()


    return (
        <div>
            <div className='dashboard'>
                <Button onClick={() => { navigate('/') }} 
                text='Inicio' 
                />
                <ul>
                    <Button onClick={() => { navigate('/aba01') }} 
                    text='Aba01' alt='Aba01' title='Aba01'
                    />

                    <Button onClick={() => { navigate('/login') }} 
                    text={<img src="https://img.icons8.com/material/48/000000/user-male-circle--v1.png" alt='Sair' title='Sair'/>}
                    />
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}


export default Dashboard;