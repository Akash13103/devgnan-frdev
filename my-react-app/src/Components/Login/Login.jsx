import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
    const [userName, updateUserName] = useState("Akash")
    const [password, setPassword] = useState("")
    const [successRes, setSuccessRes] = useState("")
    const navigate = useNavigate("");
    function handleUserName(event) {
        console.log("UserName:", event.target.value)
        updateUserName(event.target.value)
    }
    function handlePassword(event) {
        console.log("Password:", event.target.value)
        setPassword(event.target.value)
    }
    function handleLoginButton() {
        console.log(userName, password)
        axios.post(
            'https://api.escuelajs.co/api/v1/auth/login',
            {
                email: "john@mail.com",
                password: "changeme",
            }
        ).then(function (positiveResponse, negativeResponse) {
            console.log(positiveResponse, negativeResponse)
            setSuccessRes(positiveResponse.data.access_token)
        })
        if (userName === "Akash" && password === "123Kap") {
            navigate('/dashboard')
        }
        else {
            alert("User is invalid")
        }
    }
    return (
        <>
            <div className="login-container">
                <div className="login-card">
                    <h5>Login to Kite</h5>
                    <div className="input-field">Phone or UserID</div>
                    <input type="text" onChange={handleUserName} placeholder="Phone or UserID" required />
                    <div className="input-field">Password</div>
                    <input type="password" onChange={handlePassword} placeholder="Password" required />
                    <button className="login-button" onClick={handleLoginButton}>Login</button>
                    <div className="forgot-link"><a href="*">Forgot User ID or password?</a></div>
                </div>
            </div>
        </>
    );
}
export default Login;