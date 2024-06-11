import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Mentor from "./Components/Mentor";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import Services from "./Components/Services";
//import User from "./Components/User";
import Testomony from "./Components/Testomony";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/Testomony" element={<Testomony />} />
      </Routes>
    </Router>
  );
}

export default App;
