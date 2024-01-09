import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom';



function App() {

  const routes = createBrowserRouter ([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Dashboard',
      element: <Dashboard />
    }
  ])


  return (
         <RouterProvider router={routes}/>
  );
}

export default App;
