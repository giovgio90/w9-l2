import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.selectedBookId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjZhOTEwYmNhMDAwMTQ1ODNmZDkiLCJpYXQiOjE2OTQwOTk0NzMsImV4cCI6MTY5NTMwOTA3M30.6kcgMLFaLZ-lWK-U3ncdlPZxL4huAhbq8C5iJirgKSA",
        },
      });

      if (response.ok) {
        const comments = await response.json();
        console.log("Lista dei commenti:", comments);

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
