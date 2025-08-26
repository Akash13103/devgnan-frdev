import React from "react";
import "../CardRight/CardOne.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GiftIcon from "@mui/icons-material/CardGiftcard";
const CardOne = () => {
  const value = 35;
  return (
    <div>
      <div>COUPONS</div>
      <div style={{ display: "flex", "align-items": "anchor-center" }}>
        <LocalOfferIcon style={{ "margin-right": "10px" }} />
        Apply Coupons
        <button className="addressButton">APPLY</button>
      </div>
    </div>
  );
};

export default CardOne;
