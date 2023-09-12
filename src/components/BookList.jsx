import React, { useState, useEffect } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(props.books);

  useEffect(() => {
    const filtered = props.books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredBooks(filtered);
  }, [searchQuery, props.books]);

  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="text-start">Cerca un libro</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Scrivi un titolo.."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {filteredBooks.map((book) => (
              <Col xs={12} md={4} key={book.asin}>
                <SingleBook
                  book={book}
                  setNewAsin={props.setNewAsin}
                  colorPrice="text-danger fw-bold"
                  selectedAsin={props.selectedAsin}
                />
              </Col>
            ))}
          </Row>
        </Col>
        {/* <Col md={4}>
          <CommentArea asin={this.state.selectedBook} />
        </Col> */}
      </Row>
    </>
  );
};

export default BookList;
