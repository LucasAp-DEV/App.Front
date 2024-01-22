import {Routes, Route, useNavigate} from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Menu from './pages/Menu/Menu';
import Login from './pages/Login/Login';
import { isAuthentication } from "./auth";
import { useEffect } from "react";
import Usuarios from "./pages/Usuarios/Usuarios";

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuthentication()) {
      navigate("/login")
    }

  },[navigate])


  return (
        <Routes>
            <Route path="/login" element={<Login />} />
              <Route path="/" element={<Layout />}>
                <Route path="menu" element={<Menu />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="aba02" element={<Menu />} />
              </Route>
        </Routes>
    );
}

export default App;
