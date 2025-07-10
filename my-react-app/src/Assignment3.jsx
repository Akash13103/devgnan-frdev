import React from "react";
import { useState } from "react";

export default function Assignment3() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  function handleUserName(event) {
    console.log("UserName:", event.target.value);
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    console.log("Password:", event.target.value);
    setPassword(event.target.value);
  }

  // Login function from Assignment 2
  const handleLogin = async () => {
    // TODO: Copy from Assignment 2
    // TODO: After login, automatically call getProfile()
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
        setUser();
        console.log(user);
        setEmail("");
        setPassword("");
        getProfile(url);
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

  const getProfile = async () => {
    if (!token) {
      setError("No token found. Please login first.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // TODO: Make API call to get user profile
      // URL: https://api.escuelajs.co/api/v1/auth/profile
      // Method: GET
      // Headers: { Authorization: `Bearer ${token}` }
      // TODO: Set profile state with response data
      const token = await axios.get(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          Headers: { Authorisation: `Bearer ${token}` },
        }
      );
      setProfile(token);
    } catch (error) {
      setError("❌ Failed to get profile: " + error.message);
    }

    setLoading(false);
  };

  const handleLogout = () => {
    // TODO: Clear everything including profile
    setUser(null);
    setToken(null);
    setProfile(null);
    localStorage.removeItem("token");
  };

  if (!user) {
    // Show login form
    return (
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

  return (
    // Show profile page
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>👤 User Profile</h2>

        {loading && <p>🔄 Loading profile...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {profile && (
          <div style={styles.profile}>
            {/* TODO: Display profile information */}
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            {/* TODO: Add more profile fields */}
          </div>
        )}

        <div style={styles.buttons}>
          <button onClick={getProfile}>Refresh Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
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
