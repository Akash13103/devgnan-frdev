import React from "react";
import DashBoard from "../DashBoard/DashBoard";
import { Link } from "react-router-dom";
import { CiBellOn } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const accesToken = localStorage.getItem("Response");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(accesToken);
    navigate("/");
  };
  function logoutHandle() {
    localStorage.removeItem("Response");
  }
  return (
    <>
      <div className="navbar">
        <ul className="navbar-container">
          <li>
            <Link to="/dashboard">DashBoard</Link>
          </li>

          <li>
            <Link to="/orders">Orders</Link>
          </li>

          <li>
            <Link to="/holdings">Holdings</Link>
          </li>

          <li>
            <Link to="/positions">Positions</Link>
          </li>

          <li>
            <Link to="/funds">Funds</Link>
          </li>

          <li>
            <Link to="/bids">Bids</Link>
          </li>
          <li onClick={logoutHandle}>Logout</li>

          <div className="icons">
            <CiBellOn />
            <CiShoppingCart />
          </div>
          <li>
            <button type="submit" className="login-btn" onClick={handleLogout}>
              Login
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
