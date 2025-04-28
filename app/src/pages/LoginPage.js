import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

import users from "../Data/users.json";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    const user = users.find(u => u.user === username && u.pass === password);

    if(user){
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/test1");
    }

    /*
    if (username === "admin" && password === "admin") {
      alert("Login successful!");
    } else {
      setError("Invalid username or password.");
    }
    */

  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {error && <p className="error">{error}</p>}
        
        <button type="submit" className="submit-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
