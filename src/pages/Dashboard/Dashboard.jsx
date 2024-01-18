import './Dashboard.css'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button';


const Dashboard = () => {

    const navigate = useNavigate()


    return (
        <div>
            <div className='dashboard'>
                <Button onClick={()=> {navigate('/dashboard')}} text='Dashboard' />
                <ul>
                    <li>
                        <Button onClick={()=> {navigate('/dashboard')}} text='Dashboard' />
                    </li>
                    <li>
                        <Button onClick={()=> {navigate('/dashboard')}} text='Dashboard' />
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