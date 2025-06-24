import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from "./Components/Login.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0);
  const location=useLocation();
  console.log("location:",location);

  return (
    <>
    {
      //location.pathName==='/'?null:<NavBar/>
        
    }
        <Routes>
          <Route path="/login/" element={<Login/>}/>
        </Routes>
    </>
  );
}

export default App
