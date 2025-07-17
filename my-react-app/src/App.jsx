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
import { Provider } from "react-redux";
import { store } from "./redux/store";
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
import Assignment3 from "./Assignment3.jsx";
import AsianPaintsChart from "./Components/AsianPaintsChart/AsianPaintsChart.jsx";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes.jsx";
import Counter from "./Components/Counter/Counter.jsx";
function App() {
  const location = useLocation();
  console.log("location:", location.pathname);

  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoutes>
                <Orders />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/holdings"
            element={
              <ProtectedRoutes>
                <Holdings />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/positions"
            element={
              <ProtectedRoutes>
                <Positions />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/funds"
            element={
              <ProtectedRoutes>
                <Funds />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/bids"
            element={
              <ProtectedRoutes>
                <Bids />
              </ProtectedRoutes>
            }
          />
          <Route path="/a1" element={<Assignment1 />} />
          <Route path="/a2" element={<Assignment2 />} />
          <Route path="/a3" element={<Assignment3 />} />
          <Route path="/sb" element={<AsianPaintsChart />} />
          <Route path="/s" element={<Counter />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
