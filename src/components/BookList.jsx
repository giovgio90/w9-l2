import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedBook: null,
  };

  getQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  handleBookSelect = (selectedBookId) => {
    this.setState({ selectedBookId });
  };

  render() {
    return (
      <Row>
        <Col xs={6}>
          <Form.Group className="mb-3">
            <Form.Label className="text-start">Cerca un libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi un titolo.."
              value={this.state.searchQuery}
              onChange={(event) => this.getQuery(event.target.value)}
            />
          </Form.Group>

          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLocaleLowerCase()))
            .map((book, index) => (
              <SingleBook
                key={index}
                book={book}
                selectedBookId={this.props.selectedBookId}
                onBookSelect={this.props.onBookSelect}
                colorPrice="text-danger fw-bold"
              />
            ))}
        </Col>
        <Col md={6}>
          <CommentArea asin={this.state.selectedBook} />
        </Col>
      </Row>
    );
  }
}

export default BookList;
