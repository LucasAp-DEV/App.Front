import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Aba01 from './pages/Aba01/Aba01'
import Aba02 from './pages/Aba02/Aba02'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



function App() {

  const routes = createBrowserRouter ([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Dashboard',
      element: <Dashboard />
    },
    {
      path: '/Aba01',
      element: <Aba01 />
    },
    {
      path: '/Aba02',
      element: <Aba02 />
    }
  ])


  return (
         <RouterProvider router={routes}/>
  );
}

export default App;
