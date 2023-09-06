// import { Component } from "react";
import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        className="mb-3"
        onClick={() => this.setState({ selected: this.state.selected ? false : true })}
        style={{ border: this.state.selected ? "2px solid red" : "none" }}
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
    );
  }
}

export default SingleBook;