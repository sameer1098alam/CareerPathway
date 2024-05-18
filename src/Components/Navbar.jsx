// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="image.jpg" alt="Logo" /> {/* Insert your logo image */}
        </div>
        <NavLink to="/" activeClassName="active">
          <li>Home</li>
        </NavLink>

        <NavLink to="/about" activeClassName="active">
          <li>About</li>
        </NavLink>

        <NavLink to="/services" activeClassName="active">
          <li>Services</li>
        </NavLink>

        <NavLink to="/login" activeClassName="active">
          <li>Login</li>
        </NavLink>

        <NavLink to="/register" activeClassName="active">
          <li>Register</li>
        </NavLink>
        <NavLink to="/mentor" activeClassName="active">
          <li>Mentor</li>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
