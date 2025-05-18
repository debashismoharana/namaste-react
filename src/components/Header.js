import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useNetworkStatus from "../utils/useNetworkStatus";

const Header = () => {
  const [login, setLogin] = useState("Login");
  const networkStatus = useNetworkStatus();

  return (
    <div className="flex justify-between items-center bg-pink-50 shadow-lg p-2">
      <Link to="/">
        <img alt="logo" className="w-40" src={LOGO_URL} />
      </Link>
      <div className="flex">
        <ul className="flex items-center space-x-4 mr-4">
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
