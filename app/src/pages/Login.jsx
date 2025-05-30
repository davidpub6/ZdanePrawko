import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

import users from "../Data/users.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to handle user login
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Reset the error message
    setError("");

    // Check if username and password are provided
    if (username === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    // Check if the user exists
    const userExist = users.find((u) => u.user === username);
    if (!userExist) {
      setError("User does not exist. Please sign up first.");
      return;
    }
    
    // Check if the password is correct
    const rightPass = users.find(u => u.user === username && u.pass !== password);
    if (rightPass) {
      setError("Incorrect password. Please try again.");
      return;
    }

    // Check if the user exists and the password matches
    const user = users.find(u => u.user === username && u.pass === password);
    if(user){
      localStorage.setItem("user",JSON.stringify(user));
      navigate("/jazdy");
    }
  };
  
  // Function to handle user signup
  const handleSignup = (event) => {
      event.preventDefault();
      setError(""); // Reset the error message on signup attempt

      // Check if username and password are provided
      if (username === "" || password === "") {
        setError("Please fill in both fields.");
        return;
      }
    
      // Check if the user already exists
      const userExists = users.find((u) => u.user === username);
      if (userExists) {
        setError("User already exists. Please choose a different username.");
        return;
      }
      
      // Create a new user and save it to localStorage
      const newUser = { user: username, pass: password, rides: [], wyniki: [] };
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      setError("");
      alert("Signup successful! You can now log in.");
    };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white bg-opacity-80 rounded-lg p-8 w-72 shadow-lg">
        <h2 className="text-center mb-5"> Login/Sign-up </h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label className="font-bold block mb-1" htmlFor="username">Username</label>
            <input
              className="w-full p-2 text-lg mt-1 border border-gray-300 rounded"
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="font-bold block mb-1" htmlFor="password">Password</label>
            <input
              className="w-full p-2 text-lg mt-1 border border-gray-300 rounded"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button className="bg-blue-500 text-white p-2 w-full text-lg rounded hover:bg-blue-600 mb-2" type="button" onClick={handleSignup}>
            Sign-up
          </button>
          <button className="bg-green-500 text-white p-2 w-full text-lg rounded hover:bg-green-600" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
