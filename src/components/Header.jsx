import React, { useEffect, useState } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in based on localStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    setIsLoggedIn(loginStatus === "true");
  }, []);

  // Handle logout action
  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirect to home page or any other page
  };

  return (
    <nav className="glossy-header bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-4" style={{ maxWidth: "1200px" }}>
        {/* Brand Name */}
        <h1 className="text-2xl font-bold">
          <i>EXPLORE EASE</i>
        </h1>

        {/* Navigation Links and Login/Logout Button */}
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="home" className="text-decoration-none text-black font-bold">Home</a>
            <a href="pricing" className="text-decoration-none text-black font-bold">Pricing</a>
            <a href="contact-us" className="text-decoration-none text-black font-bold">Contact</a>
            <a href="booking" className="text-decoration-none text-black font-bold">Book</a>
          </div>

          {/* Conditional Login/Logout Button */}
          {isLoggedIn ? (
            <button
              className="text-white rounded-2xl py-2 px-5 font-bold shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
            <button
                className="text-indigo-600 border-2 border-indigo-600 rounded-2xl py-2 px-5 font-bold shadow-md hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => window.location.href = "/sign-up"}
              >
                Sign Up
              </button>
              <button
                className="text-white rounded-2xl py-2 px-5 font-bold shadow-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => window.location.href = "/sign-in"}
              >
                Login
              </button>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
