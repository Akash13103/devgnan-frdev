import React, { Component } from "react";
import SideBar from "../SideBar/SideBar";
import "./Bids.css";

class Bids extends Component {
  render() {
    return (
      <div className="content">
        <SideBar />
        <div className="orders-con">
          <p>Bids</p>
        </div>
      </div>
    );
  }
}

export default Bids;
