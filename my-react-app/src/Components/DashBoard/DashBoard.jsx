import React, { Component } from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Orders from "../Orders/Orders";
import "../DashBoard/DashBoard.css";
class DashBoard extends Component {
  render() {
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
}

export default DashBoard;
