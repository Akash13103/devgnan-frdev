import React from "react";
import { useState } from "react";
import { handleAuth, LoginSlice } from "../../Redux/Slices/LoginSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName, updatePassword } from "../../Redux/Slices/LoginSlice";
import axios from "axios";
function Login() {
  // const [userName, updateUserName] = useState("Akash");
  // const [password, setPassword] = useState("");
  const { userName, password, isLoading } = useSelector(
    (globalState) => globalState.LoginForm
  );
  console.log("globalstate", userName, password, isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleUserName(event) {
    console.log("UserName:", event.target.value);
    dispatch(updateUserName(event.target.value));
  }
  function handlePassword(event) {
    console.log("Password:", event.target.value);
    dispatch(updatePassword(event.target.value));
  }
  async function handleLoginButton() {
    console.log(userName, password);
    try {
      dispatch(handleAuth({ userName, password }));
      // const url = await axios.post(
      //   "https://api.escuelajs.co/api/v1/auth/login",
      //   {
      //     email: userName,
      //     password: password,
      //   }
      // );
      // const Response = await url.data.access_token;
      if (userName === "john@mail.com" && password === "changeme") {
        localStorage.setItem("Response", Response);
        navigate("/dashboard");
        alert("successful");
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
          {isLoading ? <div className="loader"></div> : null}
          <div className="input-field">Phone or UserID</div>
          <input
            className="userInput"
            type="text"
            onChange={handleUserName}
            placeholder="Phone or UserID"
            required
            value={userName}
          />
          <div className="input-field">Password</div>
          <input
            className="userInput"
            type="password"
            onChange={handlePassword}
            placeholder="Password"
            required
            value={password}
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
