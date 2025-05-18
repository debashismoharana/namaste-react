import { useState, useEffect } from "react";
import { Link } from "react-router";

import { RESTAURANTS_API } from "../utils/constants";
import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const networkStatus = useNetworkStatus();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(RESTAURANTS_API);
    const json = await response.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantsList(restaurants);
    setFilteredRestaurantList(restaurants);
  };

  return (
    <div className="body-component">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="btn searchBtn"
          onClick={() => {
            const searchedRestaurant = restaurantsList.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilteredRestaurantList(searchedRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="filters">
        <button
          className="btn filter-btn"
          onClick={() => {
            const filteredResList = restaurantsList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setFilteredRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {!networkStatus ? (
        <h1>Please check your internet connection</h1>
      ) : (
        <div className="restaurants-container">
          {restaurantsList.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurantList.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  <RestaurantCard resData={restaurant} />
                </Link>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default Body;
