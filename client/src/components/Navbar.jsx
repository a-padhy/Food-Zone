// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/register");
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link to="/" className="text-white text-xl font-semibold">
          FoodZone
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          {!cookies.access_token ? (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <button onClick={logout}> Logout </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
