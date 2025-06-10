import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import bcrypt from "bcryptjs-react";

import usersJSON from "../Data/users.json";
import salt from "../Data/salt.json";

function Login() {

  const users = JSON.parse(localStorage.getItem("users")); // Get users from localStorage
  // If users are not found in localStorage, set them from the JSON file
  if(!users) {
    localStorage.setItem("users", JSON.stringify(usersJSON));
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Look into bcryptjs for password hashing
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePass = (pass) => {
    //const errorMesage = "Password must ";
    let errorMesage = "Password must ";
    const notFour = "be at least 4 characters long";
    const noUpper = "contain 1 uppercase letter";
    const noNumber = "contain 1 number";

    const hasUpperCase = /[A-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const isLongEnough = pass.length >= 4;

    if (!isLongEnough || !hasUpperCase || !hasNumber) {
      let errorLength = 0;
      if (!isLongEnough) { 
        errorMesage += notFour;
        errorLength++; // Increment error length for each condition not met
      }
      if (!hasUpperCase) { 
        if (errorLength > 0) errorMesage += ",";
        errorMesage += " "+noUpper;
        errorLength++;
      }
      if (!hasNumber) { 
        if (errorLength > 0) errorMesage += ",";
        errorMesage += " "+noNumber;
      }
      setError(errorMesage);
      return false;
    }
    return true;
  }

  // Function to handle user login
  const handleSubmit = (event) => {
    event.preventDefault();

    // Hash the password before storing it in the database
    const hashedPass = bcrypt.hashSync(password, salt);
    
    // Reset the error message
    setError("");

    // Check if username and password are provided
    if (username === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    } else {

      // Check if the user exists
      const userExist = users.find((u) => u.user === username);
      if (!userExist) {
        setError("User does not exist. Please sign up first.");
        return;
      } else {
        
        // Check if the password is correct
        const rightPass = users.find(u => u.user === username && u.pass !== hashedPass);
        if (rightPass) {
          setError("Incorrect password. Please try again.");
          return;
        } else {
          // Check if the user exists and the password matches
          const user = users.find(u => u.user === username && u.pass === hashedPass);
          if(user){
            localStorage.setItem("user",JSON.stringify(user));
            localStorage.setItem("users", JSON.stringify(users));
            navigate("/jazdy");
          } else {
            setError("Wystąpił błąd");
          }
        }
      }
    }
  };
  
  // Function to handle user signup
  const handleSignup = (event) => {
      event.preventDefault();
      setError(""); // Reset the error message on signup attempt

      const hashedPass = bcrypt.hashSync(password, salt);

      // Check if username and password are provided
      if (username === "" || password === "") {
        setError("Please fill in both fields.");
        return;
      } else {
      
        // Check if the user already exists
        const userExists = users.find((u) => u.user === username);
        if (userExists) {

          setError("User already exists. Please choose a different username.");
          return;

        } else if (username.length < 3) {

          setError("Username must be at least 3 characters long.");
          return; // If username validation fails, exit the function

        } else {

          // validate password
          if (validatePass(password)) {

            // Create a new user and save it to localStorage
            const newUser = { user: username, pass: hashedPass, rides: [], wyniki: [] };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            setError("");
            alert("Signup successful! You can now log in.");

            const user = users.find(u => u.user === username && u.pass === hashedPass);
            if(user){
              localStorage.setItem("user",JSON.stringify(user));
              navigate("/jazdy");
            }

          } else {
            return; // If password validation fails, exit the function
          }
        }
      }
    };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white bg-opacity-80 rounded-lg p-8 w-72 shadow-lg">
        <h2 className="text-center mb-5"> Login/Sign-up </h2>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            {/* Username Input */}
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
            {/* Password Input */}
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
          
          {/* Error Message */}
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          {/* Buttons for Login and Sign-up */}
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
