// Login.js
import React from "react";
import "./Login.css"; // Import the CSS file

const Login = () => {
  return (
    <div className="login-container">
      {" "}
      {/* Apply the CSS class to the container */}
      <h1>Login</h1>
      <form className="login-form">
        {" "}
        {/* Apply the CSS class to the form */}
        <input type="text" placeholder="Enter your username" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
