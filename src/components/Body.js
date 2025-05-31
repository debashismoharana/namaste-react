import { useState, useEffect } from "react";
import { Link } from "react-router";

import { RESTAURANTS_API } from "../utils/constants";
import RestaurantCard, { withNewLabel } from "../components/RestaurantCard";
import Shimmer from "./Shimmer";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const networkStatus = useNetworkStatus();
  const NewRestaurantCard = withNewLabel(RestaurantCard);

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
      <div className="m-2 flex justify-between">
        <input
          className="w-[95%] border border-grey-300 p-1"
          type="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
        <button
          className="bg-blue-300 px-3 py-1 rounded-sm"
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
      <div className="flex justify-start px-3 py-1 ">
        <button
          className="bg-blue-300 p-2 rounded-sm"
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
        <div className="flex flex-wrap w-full">
          {restaurantsList?.length === 0 ? (
            <Shimmer />
          ) : (
            filteredRestaurantList?.map((restaurant) => {
              return (
                <Link
                  to={"/restaurants/" + restaurant.info.id}
                  key={restaurant.info.id}
                >
                  {restaurant.info.isNewlyOnboarded ? (
                    <NewRestaurantCard resData={restaurant} />
                  ) : (
                    <RestaurantCard resData={restaurant} />
                  )}
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
