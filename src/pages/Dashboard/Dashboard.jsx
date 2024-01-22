import './Dashboard.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Dashboard = () => {

    const navigate = useNavigate()


    return (
        <div>
            <div className='dashboard'>
                <Button onClick={() => { navigate('/') }} text='Dashboard' />
                <ul>
                    <Button onClick={() => { navigate('/aba01') }} text='Aba01' />
                    <Button onClick={() => { navigate('/aba02') }} text='Aba02' />
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
}


export default Dashboard;