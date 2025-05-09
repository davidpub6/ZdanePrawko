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
      navigate("/jazdy");
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
    <div className="flex items-center justify-center h-screen">
      <div class="bg-white bg-opacity-80 rounded-lg p-8 w-72 shadow-lg">
        <h2 class="text-center mb-5"> Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div class="mb-4">
            <label class="font-bold block mb-1" htmlFor="username">Username</label>
            <input
              class="w-full p-2 text-lg mt-1 border border-gray-300 rounded"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div class="mb-4">
            <label class="font-bold block mb-1" htmlFor="password">Password</label>
            <input
              class="w-full p-2 text-lg mt-1 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p class="text-red-500 text-sm text-center">{error}</p>}
          
          <button class="bg-green-500 text-white p-2 w-full text-lg rounded hover:bg-green-600" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
