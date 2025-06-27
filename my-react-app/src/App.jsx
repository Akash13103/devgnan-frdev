import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Login from "./Components/Login/Login.jsx";
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar.jsx";
import './Components/Login/Login.css';
import DashBoard from './Components/DashBoard/DashBoard.jsx';
import Orders from './Components/Orders/Orders.jsx';
import Holdings from './Components/Holdings/Holdings.jsx';
import Positions from './Components/Positions/Positions.jsx';
import Funds from './Components/Funds/Funds.jsx';
import Bids from './Components/Bids/Bids.jsx';
function App() {
  const [count, setCount] = useState(0);
  //const location=useLocation();
  //console.log("location:",location);
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/holdings" element={<Holdings/>}/>
          <Route path="/positions" element={<Positions/>}/>
          <Route path="/funds" element={<Funds/>}/>
          <Route path="/bids" element={<Bids/>}/>
        </Routes>
    </>
  );
}

export default App
