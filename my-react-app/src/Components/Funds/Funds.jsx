import React, { useState } from "react";
import axios from'axios';

export default function Funds() {
  const res = localStorage.getItem("Response");
  const [userData,setuserData]=useState('')
  async function fetchFunds() {
    const url = await axios.get("https://api.escuelajs.co/api/v1/auth/profile",
    {
      headers: {
        Authorization: `${"Bearer"} ${res}`,
      },
    })
    const firm= await url.data.email
    setuserData(firm)
    console.log("userData",userData)
  }
  return (
    <>
      <div>
        <div><h1>My Funds</h1></div>
        {userData}
        
        <button onClick={fetchFunds}>Fetch Funds</button>
      </div>
    </>
  );
}
