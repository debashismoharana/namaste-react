import { useState } from "react";
import { LOGO_URL } from "../common/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");

  toggleBtnText = () => {
    setBtnText(btnText == "Login" ? "Logout" : "Login");
  };

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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button onClick={toggleBtnText}>{btnText}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
