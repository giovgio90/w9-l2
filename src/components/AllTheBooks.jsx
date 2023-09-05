import { Col, Button, Container, Row, Card } from "react-bootstrap";
import books from "../data/scifi.json";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    const first20Books = books.slice(0, 52);

    return (
      <Container>
        <Row>
          {first20Books.map((book, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className={this.props.margin}>
                <Card.Img variant="top" src={book.img} style={{ height: "300px", objectFit: "contain" }} />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text className={this.props.price}>
                    <strong className={this.props.price}>{book.price}€</strong>
                  </Card.Text>
                  <Button variant="primary">Acquista</Button>
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
