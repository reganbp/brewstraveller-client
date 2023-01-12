import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BrewCard = ({ title, body }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary"> Go somewhere </Button>
      </Card.Body>
    </Card>
  );
};

export default BrewCard;
