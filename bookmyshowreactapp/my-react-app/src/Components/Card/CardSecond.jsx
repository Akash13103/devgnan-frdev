import React, { useState } from "react";
import "../Card/CardSecond.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const CardSecond = () => {
  const [isClicked, setIsClicked] = useState(false);
  function clickOnTheBox() {
    setIsClicked(true);
  }
  return (
    <div className="checkBook">
      {isClicked ? <CheckBoxIcon style={{color:"#f9002b"}}/> : <CheckBoxOutlineBlankIcon />}
      NO ITEMS SELECTED
      <div className="buttongroup">
        <button className="buttons1">REMOVE</button>
        <button className="buttons2">MOVE TO WISHLIST</button>
      </div>
    </div>
  );
};

export default CardSecond;
