import React from "react";
import DashBoard from "../DashBoard/DashBoard";
function NavBar() {
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div onClick={<DashBoard/>}>Dashboard</div>
          <div>Orders</div>
          <div>Holdings</div>
          <div>Positions</div>
          <div>Funds </div>
          <div>Bids</div>
        </div>
      </div>
    </>
  )
}
export default NavBar;