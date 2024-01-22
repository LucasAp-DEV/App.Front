import {Routes, Route, useNavigate} from "react-router-dom";
import Layout from './pages/Layout/Layout';
import Aba02 from './pages/Aba02/Aba02';
import Login from './pages/Login/Login';
import { isAuthentication } from "./auth";
import { useEffect } from "react";
import Usuarios from "./pages/Aba01/Usuarios";

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
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="usuarios" element={<Usuarios />} />
                <Route path="aba02" element={<Aba02 />} />
              </Route>
        </Routes>
    );
}

export default App;
