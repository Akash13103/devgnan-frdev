import React from "react";
import DashBoard from "../DashBoard/DashBoard";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div>
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
        </ul>
      </div>
    </>
  );
}
export default NavBar;
