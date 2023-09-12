import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  const isSelected = props.book.asin === props.selectedAsin;

  const cardStyle = {
    border: isSelected ? "3px solid red" : "1px solid black",
  };

  const handleCardClick = () => {
    console.log("selectedAsin:", props.selectedAsin);
    props.setNewAsin(props.book.asin);
  };

  return (
    <>
      <Card className="mb-4" style={cardStyle} onClick={handleCardClick}>
        <Card.Img variant="top" src={props.book.img} style={{ height: "300px", objectFit: "contain" }} />
        <Card.Body>
          <Card.Title className="text-truncate" style={{ color: "black" }}>
            {props.book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
