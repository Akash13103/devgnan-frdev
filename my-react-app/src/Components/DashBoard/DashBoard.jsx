import React, { Component } from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Orders from "../Orders/Orders";
import "../DashBoard/DashBoard.css";
class DashBoard extends Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <div>
            <Link to="/dashboard">
              <h2>DashBoard</h2>
            </Link>
          </div>
          <div>
            <Link to="/orders">
              <h2>Orders</h2>
            </Link>
          </div>
          <div>
            <Link to="/holdings">
              <h2>Holdings</h2>
            </Link>
          </div>
          <div>
            <Link to="/positions">
              <h2>Positions</h2>
            </Link>
          </div>
          <div>
            <Link to="/funds">
              <h2>Funds</h2>
            </Link>
          </div>
          <div>
            <Link to="/bids">
              <h2>Bids</h2>
            </Link>
          </div>
        </div>
        <div className="content">
          <div>Welcome to Kite Zerodha DashBoard</div>
        </div>
      </>
    );
  }
}

export default DashBoard;
