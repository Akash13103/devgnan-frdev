import React from "react"
function Login() {
    return (
        <> 
            <div className="login-container">
                <div className="login-card">
                    <h5>Login to Kite</h5>
                    <form className="form">
                        <div className="input-field">Phone or UserID</div>
                        <input type="text" id="form-input" placeholder="Phone or UserID" required />
                    </form>
                    <form className="form">
                        <div className="input-field">Password</div>
                        <input type="password" id="form-input" placeholder="Password" required />
                    </form>
                        <button className="login-button" onclick="submit">Login</button>
                    <div className="forgot-link"><a href="*">Forgot User ID or password?</a></div>
                </div>
            </div>
        </>
    );
}
export default Login;