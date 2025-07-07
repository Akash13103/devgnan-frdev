import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import "./Positions.css";

class Positions extends Component {
  render() {
    return (
      <div className="content">
        <SideBar />
        <div className="orders-con">
          <p>Positions</p>
        </div>
      </div>
    );
  }
}

export default Positions;
