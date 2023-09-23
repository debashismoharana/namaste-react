import { LOGO_URL } from "../common/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img
            className="logo-icon"
            src={LOGO_URL}
            alt="Green Leaf Restaurant"
          />
        </div>
      </div>
      <div className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
