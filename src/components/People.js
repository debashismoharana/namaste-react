import { useState, useEffect } from "react";

const People = () => {
  const [personInfo, setPersonInfo] = useState(null);
  const [type] = useState("Function based component");
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  useEffect(() => {
    getPersonData();
  }, []);

  const getPersonData = async () => {
    const data = await fetch("https://api.github.com/users/debashismoharana");
    const userData = await data.json();
    setPersonInfo(userData);
    console.log(userData);
  };

  const upVote = () => {
    const upDatedLikeCount = likeCount + 1;
    setLikeCount(upDatedLikeCount);
  };

  const downVote = () => {
    const upDatedDislikeCount = dislikeCount + 1;
    setDislikeCount(upDatedDislikeCount);
  };

  if (!personInfo) return false;
  const { name, location, bio, avatar_url } = personInfo;

  return (
    <div className="people-card">
      <img className="github-avatar" src={avatar_url} />
      <h2>{name}</h2>
      <h5>{location}</h5>
      <div>{bio}</div>
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
};

export default People;
