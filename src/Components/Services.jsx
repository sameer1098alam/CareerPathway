// Services.jsx

import React from "react";
import "./Services.css"; // Import the CSS file for styling

const Services = () => {
  return (
    <div className="services-page">
      {" "}
      {/* Apply a class specific to the Services page */}
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="service-box">
          <p>We provide programming and mentoring services to all students.</p>
        </div>
        <div className="service-box">
          <p>
            We offer counseling services to students from class 9 to graduation.
          </p>
        </div>
        <div className="service-box">
          <p>We organize one-to-one mentoring facilities for students.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
