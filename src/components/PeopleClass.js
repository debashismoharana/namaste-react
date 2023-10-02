import { Component } from "react";

class PeopleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Class based component",
      likeCount: 0,
      dislikeCount: 0,
    };
  }

  render() {
    const { name, location } = this.props;
    const { type, likeCount, dislikeCount } = this.state;

    const upVote = () => {
      this.setState({ likeCount: this.state.likeCount + 1 });
    };
    const downVote = () => {
      this.setState({ dislikeCount: this.state.dislikeCount + 1 });
    };

    return (
      <div className="people-card">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <div>{type}</div>
        <button className="vote-btn" onClick={upVote}>
          👍
        </button>{" "}
        {likeCount}
        <button className="vote-btn" onClick={downVote}>
          👎
        </button>{" "}
        {dislikeCount}
      </div>
    );
  }
}

export default PeopleClass;
