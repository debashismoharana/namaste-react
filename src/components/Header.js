import { useState } from "react";
import { LOGO_URL } from "../common/constants";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
