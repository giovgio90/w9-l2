// import { Component } from "react";
import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <Card
          className="mb-3"
          onClick={() => this.setState({ selected: this.state.selected ? false : true })}
          style={{ border: this.state.selected ? "2px solid red" : "1px solid black" }}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt="book"
            style={{ height: "300px", objectFit: "contain" }}
          />
          <Card.Body>
            <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
            <Card.Text className={this.props.colorPrice}>{this.props.book.price}</Card.Text>
            <Button variant="primary">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
