// import { Component } from "react";
import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Col xs={6}>
        <Card
          className="mb-4"
          onClick={() => this.setState({ selected: !this.state.selected })}
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
            <Card.Text className={this.props.colorPrice}>{this.props.book.price}€</Card.Text>
            <Button variant="primary">Acquista</Button>
          </Card.Body>
          {/* <CommentArea selected={this.state.selected} selectedBookId={this.props.book.asin} /> */}
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
