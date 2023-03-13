import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardVlog = ({ item }) => {
  return (
    <div>
      {" "}
      <Card
        style={{
          width: "15rem",
          display: "flex",
          marginBottom: "5%",
        }}
      >
        <Card.Img
          variant="top"
          src={item.image}
          style={{ height: "350px", width: "100&", overflow: "hidden" }}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.category}</Card.Text>
          <h6>{item.content}</h6>
          <Button variant="info">Watch</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardVlog;
