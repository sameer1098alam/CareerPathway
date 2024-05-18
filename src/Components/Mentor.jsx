// Mentor.js

import React from "react";
import { Card } from "react-bootstrap";
import "./Mentor.css"; // Import the CSS file

const Mentor = () => {
  // Sample array of person data
  const persons = [
    {
      id: 1,
      name: "John Doe",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 5,
      name: "Charlie Davis",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 6,
      name: "David Wilson",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 7,
      name: "Eve White",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 8,
      name: "Frank Black",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 9,
      name: "Grace Lee",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    {
      id: 10,
      name: "Henry Green",
      role: "Mentor",
      imageUrl: "public/image.jpg",
    },
    // Add more person data as needed
  ];

  return (
    <div className="mentor-container">
      {persons.map((person) => (
        <Card key={person.id} className="mentor-card">
          <Card.Img variant="top" src={person.imageUrl} />
          <Card.Body>
            <Card.Title>{person.name}</Card.Title>
            <Card.Text>{person.role}</Card.Text>
            {/* Add more details as needed */}
            <button>View Profile</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Mentor;
