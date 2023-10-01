import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { SWIGGY_RES_LIST_URL } from "../common/constants";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantsList, setfilteredRestaurantsList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  // function to get the restaurant data from swiggy's live API and set it in restaurantsList
  const getRestaurantData = async () => {
    const data = await fetch(SWIGGY_RES_LIST_URL);
    const restaurantsData = await data.json();
    resListData =
      restaurantsData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
      restaurantsData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsList(resListData);
    setfilteredRestaurantsList(resListData);
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
            <Link
              className="link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
