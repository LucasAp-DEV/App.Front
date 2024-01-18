import {Routes, Route, useNavigate} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Aba01 from './pages/Aba01/Aba01';
import Aba02 from './pages/Aba02/Aba02';
import Login from './pages/Login/Login';
import { isAuthentication } from "./auth";
import { useEffect } from "react";

function App() {

  const navigate = useNavigate()

  useEffect(() => {
    if(!isAuthentication()) {
      navigate("/login")
      console.log(isAuthentication())
    }

  },[])


  return (
    <>
        <Routes>
            <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />}>
              <Route path="aba01" element={<Aba01 />} />
              <Route path="aba02" element={<Aba02 />} />
              </Route>
        </Routes>
    </>
    );
}

export default App;
