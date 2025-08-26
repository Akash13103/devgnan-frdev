import React from "react";

const CardFour = () => {
  const value = 300;
  const value2 = 100;
  const value3 = 20;
  const total = value - value2 + value3;
  return (
    <div
      style={{ display: "flex", "flex-direction": "column", "row-gap": " 5px" }}
    >
      <div>Price Details</div>
      <div style={{ display: "flex" }}>
        <div>Total MRP</div>
        <div style={{ "margin-left": "auto" }}>₹{value}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>Discount on MRP</div>
        <div style={{ "margin-left": "auto", color: "green" }}>-₹{value2}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div>Coupon Discount</div>
        <div style={{ "margin-left": "auto", color: "#f9002b" }}>
          Apply Coupon
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <div>PlatformFee</div>
          <div style={{ color: "#f9002b", fontWeight: "bold" }}>Know More</div>
        </div>
        <div style={{ "margin-left": "auto" }}>₹{value3}</div>
      </div>
      <div style={{ display: "flex", fontWeight: "bold" }}>
        <div>Total Amount</div>
        <div style={{ "margin-left": "auto" }}>₹{total}</div>
      </div>
      <div style={{ marginTop: "5px" }}>
        <button
          style={{
            width: "100%",
            padding: "10px",
            "background-color": "#f9002b",
            "font-weight": "bold",
            color: "white",
            border: "none",
            "font-size": "small",
          }}
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default CardFour;
