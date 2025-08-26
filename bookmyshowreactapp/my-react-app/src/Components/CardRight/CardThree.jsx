import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useState } from "react";
const CardThree = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</div>
      <div
        style={{
          display: "flex",
          "align-items": "anchor-center",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        {isClicked ? (
          <CheckBoxIcon style={{ color: "#f9002b" }} />
        ) : (
          <CheckBoxOutlineBlankIcon />
        )}
        <div>Donate and make a difference</div>
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button
          style={{
            "background-color": "white",
            border: "1px solid gray",
            "border-radius": "20px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          ₹10
        </button>
        <button
          style={{
            "background-color": "white",
            border: "1px solid gray",
            "border-radius": "20px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          ₹20
        </button>
        <button
          style={{
            "background-color": "white",
            border: "1px solid gray",
            "border-radius": "20px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          ₹50
        </button>
        <button
          style={{
            "background-color": "white",
            border: "1px solid gray",
            "border-radius": "20px",
            padding: "10px",
            fontWeight: "bold",
          }}
        >
          ₹100
        </button>
      </div>
    </div>
  );
};

export default CardThree;
