import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [userName, updateUserName] = useState("Akash");
  const [password, setPassword] = useState("");
  const [successRes, setSuccessRes] = useState("");
  const navigate = useNavigate("");
  function handleUserName(event) {
    console.log("UserName:", event.target.value);
    updateUserName(event.target.value);
  }
  function handlePassword(event) {
    console.log("Password:", event.target.value);
    setPassword(event.target.value);
  }
  async function handleLoginButton() {
    console.log(userName, password);
    try {
      const url = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: "john@mail.com",
          password: "changeme",
        }
      );
      const Response = await url.data.access_token;

      if (userName === "john@mail.com" && password === "changeme") {
        localStorage.setItem("Response", Response);
        navigate("/dashboard");
      } else {
        alert("User is invalid");
      }
    } catch (error) {
      alert(error);
    }
  }
  return (
    <>
      <div className="login-page">
          <div className="login-card">
            <h5>Login to Kite</h5>
            <div className="input-field">Phone or UserID</div>
            <input
              className="userInput"
              type="text"
              onChange={handleUserName}
              placeholder="Phone or UserID"
              required
            />
            <div className="input-field">Password</div>
            <input
              className="userInput"
              type="password"
              onChange={handlePassword}
              placeholder="Password"
              required
            />
            <button className="login-button" onClick={handleLoginButton}>
              Login
            </button>
            <div className="forgot-link">
              <a href="*">Forgot User ID or password?</a>
            </div>
          </div>
        </div>
    </>
  );
}
export default Login;
