import React from "react";
import SideBar from "../SideBar/SideBar";
import "./Orders.css";

export default function Orders() {
  return (
    // Component content
    <>
      <div className="content">
        <SideBar />
        <div className="orders-con">
          <p>Orders</p>
        </div>
      </div>
    </>
  );
}
