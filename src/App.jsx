import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Col, Container, Row } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";
import CommentArea from "./components/CommentArea";

function App() {
  const [selectedAsin, setSelectedAsin] = useState("");

  const setNewAsin = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <>
      <MyNav navBar="bg-primary mb-4" linkStyle="text-white fw-bold" />
      <Container>
        <Welcome className="my-4 p-5 bg-primary text-white text-center" />
        <Row>
          <Col md={8}>
            <BookList books={fantasy} setNewAsin={setNewAsin} selectedAsin={selectedAsin} />
          </Col>
          <Col md={4}>
            <CommentArea asin={selectedAsin} />
          </Col>
        </Row>
      </Container>
      <MyFooter className="bg-primary text-center text-white p-3" container="container" footerStyle="fs-5 m-0" />
    </>
  );
}

export default App;
