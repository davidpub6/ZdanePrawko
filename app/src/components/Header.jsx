import React from "react";
import { useNavigate } from "react-router-dom";

// User gets deleted after logout because the login page updates the localStorage
// with data from users.json, which does not include the logged-out user.

const Header = () => {
    const navigate = useNavigate(); // Initialize navigation function
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {

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