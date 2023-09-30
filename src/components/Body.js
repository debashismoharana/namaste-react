import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setfilteredRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  // function to get the restaurant data from swiggy's live API and set it in restaurantsList
  const getRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5462313&lng=73.90395099999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantsData = await data.json();
    setRestaurantsList(
      restaurantsData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
    setfilteredRestaurantsList(
      restaurantsData.data.cards[2].card.card.gridElements.infoWithStyle
        .restaurants
    );
  };

  const searchRestaurants = () => {
    const filteredresList = restaurantsList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestaurantsList(filteredresList);
  };

  const findTopRatedRestaurants = () => {
    const filteredresList = restaurantsList.filter(
      (restaurant) => restaurant.info.avgRating >= 4
    );
    setfilteredRestaurantsList(filteredresList);
  };

  const findNearbyRestaurants = () => {
    const filteredresList = restaurantsList.filter(
      (restaurant) => restaurant.info.sla.deliveryTime <= 30
    );
    setfilteredRestaurantsList(filteredresList);
  };

  const findBudgetRestaurants = () => {
    const filteredresList = restaurantsList.filter(
      (restaurant) =>
        parseInt(restaurant.info.costForTwo.split(" ")[0].substring(1)) <= 300
    );
    setfilteredRestaurantsList(filteredresList);
  };

  return (
    <div className="body">
      <div className="filters">
        <div className="filter-btn">
          <button className="top-rated" onClick={findTopRatedRestaurants}>
            Top Rated Restaurants
          </button>
          <button className="nearby" onClick={findNearbyRestaurants}>
            Nearby Restaurants
          </button>
          <button className="budget" onClick={findBudgetRestaurants}>
            Budget Restaurants
          </button>
        </div>
        <div className="search-container">
          <input
            className="search-input"
            placeholder="find a restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-button" onClick={searchRestaurants}>
            Search
          </button>
        </div>
      </div>

      <div className="rest-card-container">
        {filteredRestaurantsList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
