import { Component } from "react";
import SingleBook from "./SingleBook";

import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  getQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Row>
        <Col xs={12}>
          <Form.Group className="mb-3">
            <Form.Label className="text-start">Cerca un libro</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi un titolo.."
              value={this.state.searchQuery}
              onChange={(event) => this.getQuery(event.target.value)}
            />
          </Form.Group>
        </Col>
        {this.props.books
          .filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLocaleLowerCase()))
          .map((book, index) => (
            <SingleBook colorPrice="text-danger fw-bold" key={index} book={book} />
          ))}
      </Row>
    );
  }
}

export default BookList;
