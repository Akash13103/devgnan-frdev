import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Assignment2() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  function handleUserName(event) {
    console.log("UserName:", event.target.value);
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    console.log("Password:", event.target.value);
    setPassword(event.target.value);
  }

  const handleLogin = async () => {
    // TODO: Same as Assignment 1, but also:
    // TODO: Save token to localStorage
    // TODO: Save user data to state
    // TODO: Clear form inputs
    setLoading(true);
    try {
      // TODO: Make API call to Platzi login endpoint
      const url = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: "john@mail.com",
          password: "changeme",
        }
      );
      //console.log(result);
      if (email === "john@mail.com" && password === "changeme") {
        const token = url.data.access_token;
        localStorage.setItem("Token", token);
        setUser({
          name: "Akash",
          email: email,
        });
        console.log(user);
        setEmail("");
        setPassword("");
      } else {
        console.log("❌invalid user");
        //console.log(result);
      }

      // URL: https://api.escuelajs.co/api/v1/auth/login
      // Method: POST
      // Body: { email: email, password: password }

      // TODO: Show success message with token
      // TODO: Show error message if login fails
    } catch (error) {
      setResult("❌ Error: " + error.message);
    }

    setLoading(false);
  };

  const checkSavedLogin = () => {
    // TODO: Get token from localStorage
    const getToken = localStorage.getItem("Token");
    if (getToken) {
      setUser({ token: getToken });
      setToken(getToken);
    } else {
      alert("Not Found!");
    }
    // TODO: If found, set user and token states
    // TODO: If not found, show alert
  };

  const handleLogout = () => {
    // TODO: Clear localStorage
    localStorage.removeItem("Token");
    setUser(null);
    setToken(null);
    // TODO: Clear user and token states
  };

  // Show welcome page if user is logged in
  if (user) {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2>👋 Welcome!</h2>
          <p>Hello {user.name}!</p>
          <p>Email: {user.email}</p>
          <p>Token: {token.substring(0, 20)}...</p>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    );
  }

  return (
    // Show login form if not logged in
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🔐 Assignment 2: Save Token</h2>
        <div id="form-la">
          <p>Email</p>
          <input
            className="usertag"
            type="text"
            placeholder="Enter your email"
            onChange={handleUserName}
            value={email}
          ></input>
          <p>Password</p>
          <input
            className="passtag"
            type="password"
            placeholder="Enter your password"
            onChange={handlePassword}
            value={password}
          ></input>
          <button className="buttontag" type="submit" onClick={handleLogin}>
            Login
          </button>
        </div>

        {/* TODO: Same login form as Assignment 1 */}

        <button onClick={checkSavedLogin} style={styles.secondaryButton}>
          Check Saved Login
        </button>
      </div>
    </div>
  );
}
const styles = {
  container: {
    padding: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  help: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "f8f9fa",
    borderRadius: "5px",
    fontSize: "14px",
  },
};
