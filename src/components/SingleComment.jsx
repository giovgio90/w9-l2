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
    // Accedi correttamente alle proprietà comment e rate all'interno del map
    return (
      <div className="single-comment">
        <p>Commento: {this.props.comment.comment}</p>
        <p>Valutazione: {this.props.comment.rate}</p>
      </div>
    );
  }
}

export default SingleComment;
