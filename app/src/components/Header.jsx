import React from "react";

const Header = () => {
    //Retrieve the user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className="bg-gray-800 text-white p-4 shadow-md">
            <h1 className="text-lg font-semibold">
                {user ? `Witaj, ${user.user}!` : "Witaj, Użytkowniku!"}
            </h1>
        </div>
    );
}

export default Header;