import React from "react";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="https://www.pngkit.com/png/detail/260-2601788_green-leaf-restaurant-logo.png"
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

const RestaurantCard = () => {
  return (
    <div className="rest-card">
      <img
        className="card-image"
        src="https://images.creativemarket.com/0.1.0/ps/1391484/580/386/m2/fpnw/wm1/preview-.jpg?1466669268&s=91ad59ab1814dfd751860e629b8b4e8d"
        alt="food item"
      />
      <div>Name: Khana Khazana</div>
      <div>Indian, Italian, Chinese</div>
      <div>Rating: ⭐️⭐️⭐️⭐️⭐️</div>
      <div>ETA: 30 mins</div>
    </div>
  );
};

const BodyContainer = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input className="search-input" placeholder="Search" />
      </div>
      <div className="rest-card-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">
      <div className="copyright">&copy; Copyright Debashis Moharana {new Date().getFullYear()}</div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyContainer />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
