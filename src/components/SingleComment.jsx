import { Component } from "react";

class SingleComment extends Component {
  state = {
    isExpanded: false,
  };

  toggleExpand = () => {
    this.setState((prevState) => ({
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { comment } = this.props;

    return (
      <div className="single-comment">
        <p>
          <strong>Commento:</strong> {comment.comment}
        </p>
        <p>
          <strong>Valutazione:</strong> {comment.rate}
        </p>
      </div>
    );
  }
}

export default SingleComment;
