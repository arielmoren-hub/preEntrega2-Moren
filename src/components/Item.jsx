import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Item({ item }) {
  const [cant, setCount] = useState(0);
  const id = item.id

  return (
    <div style={{ margin: "0.5rem" }} key={item.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.urlPhoto} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Presio: {item.price}</Card.Text>
          <Button variant="secondary">
            <Link to={`/item/${id}`}>
              Details
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
