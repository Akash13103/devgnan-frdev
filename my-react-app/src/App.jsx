import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.jsx";
import './Components/Login/Login.css';
import './Components/NavBar/NavBar.css';
function App() {
  const [count, setCount] = useState(0);
  //const location=useLocation();
  //console.log("location:",location);
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<NavBar/>}/>
        </Routes>
    </>
  );
}

export default App
