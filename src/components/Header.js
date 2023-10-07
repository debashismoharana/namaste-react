import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../common/assets/icons/logo.gif";

const Header = () => {
  let [btnText, setBtnText] = useState("Login");

  toggleBtnText = () => {
    setBtnText(btnText == "Login" ? "Logout" : "Login");
  };

  return (
    <div className="header">
      <Link className="link" to="/">
        <div className="logo-container">
          <div className="logo">
            <img className="logo-icon" src={logo} alt="Green Leaf Restaurant" />
          </div>
        </div>
      </Link>
      <div className="nav-menu">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/bazaar">
              Bazaar
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact Us
            </Link>
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
