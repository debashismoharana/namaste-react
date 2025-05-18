import React from "react";
import { GITHUB_USER_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 1,
      dislikes: 0,
      userData: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(GITHUB_USER_API + this.props.username);
    const json = await data.json();
    this.setState({
      userData: json,
    });
  }

  render() {
    const { likes, dislikes, userData } = this.state;
    const { name, location, avatar_url, bio, followers, following } = userData;

    return (
      <div className="user-card">
        <img className="user-logo" src={avatar_url} />
        <div className="user-details">
          <h2>
            {name} - {location}
          </h2>
          <p>{bio}</p>
          <p>
            {followers} follower(s) - {following} following(s)
          </p>
          <button
            onClick={() => {
              this.setState({
                likes: this.state.likes + 1,
              });
            }}
          >
            👍🏼
          </button>
          <button
            onClick={() => {
              this.setState({
                dislikes: this.state.dislikes + 1,
              });
            }}
          >
            👎🏼
          </button>
          <p>
            {likes} like(s) - {dislikes} dislike(s)
          </p>
        </div>
      </div>
    );
  }
}

export default UserClass;
