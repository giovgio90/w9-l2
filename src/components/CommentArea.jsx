import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.selectedBookId);
      console.error("selectedBookId è undefined");

      if (response.ok) {
        const comments = await response.json();
        this.setState({ comments });
        console.log(comments);
      }
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    if (this.props.selectedBookId) {
      this.fetchComments();
    }
  }

  render() {
    const { comments } = this.state;

    // Utilizza this.props.selected per determinare se mostrare i commenti
    return this.props.selected ? (
      <div>
        <CommentList comments={comments} />
      </div>
    ) : null;
  }
}

export default CommentArea;
