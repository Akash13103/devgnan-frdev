import React from "react"
import { useState } from "react";
function Login() {
    const [username,updateUserName]=useState("Akash")
    const [password,setPassword]=useState("")
    function handleUserName(event){
        console.log("UserName:",event.target.value)
        updateUserName(event.target.value)
    }
    function handlePassword(event){
        console.log("Password:",event.target.value)
        setPassword(event.target.value)
    }
    function handleLoginButton(){
        console.log(username,password)
        if(username === "Akash" && password === "123Kap"){
            alert("User is valid")
        }
        else{
            alert("User is invalid")
        }
    }
    return (
        <> 
            <div className="login-container">
                <div className="login-card">
                    <h5>Login to Kite</h5>
                        <div className="input-field">Phone or UserID</div>
                        <input type="text"  placeholder="Phone or UserID" required />
                        <div className="input-field">Password</div>
                        <input type="password"  placeholder="Password" required />
                        <button className="login-button" onclick="submit">Login</button>
                    <div className="forgot-link"><a href="*">Forgot User ID or password?</a></div>
                </div>
            </div>
        </>
    );
}
export default Login;