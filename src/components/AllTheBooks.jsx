import { Col, Container, Row, Card } from "react-bootstrap";
import books from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    const first20Books = books.slice(0, 52);

    return (
      <Container>
        <Row>
          {first20Books.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
              <Card className={this.props.margin}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className={this.props.price}>
                    <strong className={this.props.price}>{book.price}€</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
