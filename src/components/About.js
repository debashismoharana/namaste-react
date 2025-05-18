// import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      {/* <User name="Debashis function" city="Bhubaneswar" /> */}
      <div className="user-cards-container">
        <UserClass username="debashismoharana" />
        <UserClass username="rohanspaceiq" />
        <UserClass username="undertakingyou" />
      </div>
    </div>
  );
};

export default About;
