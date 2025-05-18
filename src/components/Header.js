import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const networkStatus = useNetworkStatus();

  return (
    <div className="header-component">
      <Link to="/">
        <img alt="logo" className="logo" src={LOGO_URL} />
      </Link>
      <div className="nav-items">
        <ul>
          <li>{networkStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="btn loginBtn"
            onClick={() => {
              setLogin(login === "Login" ? "Logout" : "Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
