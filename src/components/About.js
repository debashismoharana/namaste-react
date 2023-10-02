import People from "./People";
import PeopleClass from "./PeopleClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div className="people-container">
        <People />
        {/* <PeopleClass name="Debashis Moharana" location="Pune, Maharashtra" /> */}
      </div>
    </div>
  );
};

export default About;
