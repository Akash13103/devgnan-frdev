import { useState } from "react";
import axios from "axios";
function Assignment1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
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
    setLoading(true);
    setResult("");

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
        console.log("✅Success:" + url.data.access_token);
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

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🔐 Assignment 1: API Login</h2>
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

        {/* TODO: Add email input */}
        {/* TODO: Add password input */}
        {/* TODO: Add login button */}
        {/* TODO: Show result */}

        <div style={styles.help}>
          <p>
            <strong>Test Credentials:</strong>
          </p>
          <p>📧 john@mail.com</p>
          <p>🔒 changeme</p>
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
export default Assignment1;
