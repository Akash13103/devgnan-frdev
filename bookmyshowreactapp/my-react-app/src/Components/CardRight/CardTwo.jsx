import React from "react";
import img from "../../assets/red-gift-bow-background.png";
const CardTwo = () => {
  const value = 35;
  return (
    <div>
      <div>
        <p>GIFTING AND PERSONALIZATION</p>
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            "background-color": " rgba(249, 0, 43, 0.06)",
            paddingBottom: "9px",
            paddingTop: "10px",
          }}
        >
          <img
            style={{ transform: "rotate(90deg)", width: "95px" }}
            src={img}
          ></img>
          <div>
            <p style={{ fontWeight: "bold" }}>Buying for a loved one?</p>
            <div>
              <p>
                Gift Packaging and personalised message on card, Only for{" "}
                {"₹" + value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
