import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Link,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import "./Components/Login/Login.css";
import "./Components/DashBoard/DashBoard.css";
import DashBoard from "./Components/DashBoard/DashBoard.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Holdings from "./Components/Holdings/Holdings.jsx";
import Positions from "./Components/Positions/Positions.jsx";
import Funds from "./Components/Funds/Funds.jsx";
import Bids from "./Components/Bids/Bids.jsx";
import ZerodhaLogin from "./Components/ZerodhaLogin/ZerodhaLogin.jsx";
import D2 from "./Components/DashBoard/D2.jsx";
import Assignment1 from "./Assignment1.jsx";
import Assignment2 from "./Assignment2.jsx";
function App() {
  const location = useLocation();
  console.log("location:", location.pathname);

  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/positions" element={<Positions />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/a1" element={<Assignment1/>}/>
        <Route path="/a2" element={<Assignment2/>}/>
      </Routes>
    </>
  );
}

export default App;
