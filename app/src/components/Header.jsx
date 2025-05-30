import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate(); // Initialize navigation function
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        // Retrieve the users array from localStorage

        const users = JSON.parse(localStorage.getItem("users")) || [];
    
        // Update the users array (if needed)
        const updatedUsers = users.map((u) => {
            if (u.user === user.user) {
                // Example: Update user-specific data before logout
                return { ...u, lastLogout: new Date().toISOString() }; // Add a lastLogout timestamp
            }
            return u;
        });
    
        // Save the updated users array back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
    
        // Remove the current user from localStorage
        localStorage.removeItem("user");
    
        // Redirect to the home page
        navigate('/');
    };

    return (
        <div className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
            <h1 className="text-lg font-semibold">
                {user ? `Witaj, ${user.user}!` : "Witaj, Użytkowniku!"}
            </h1>
            <button
                onClick={() => handleLogout()}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
                Wyloguj
            </button>
        </div>
    );
}

export default Header;