import { useState } from 'react';
import './App.css';
import User from './pages/Login';

function App() {

  const [count, setCount] = useState(0)


  return (

      <div>
         <User/>

         <button onClick={() => {
              setCount(prev => prev + 1)
         }}> horas
        </button>

        {count}

        <button onClick={() => {
              setCount(prev => prev - 1)
         }}> banco
        </button>

        
        
      </div>
  );
}

export default App;
