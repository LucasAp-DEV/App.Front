import Login from './pages/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'



function App() {

  const routes = createBrowserRouter ([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/Pag1',
      element: <Pag1 />
    }
  ])


  return (
         <RouterProvider router={routes}/>
  );
}

export default App;
