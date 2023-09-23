import { useState } from "react";
import restaurantsList from "../common/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [restaurantList, setRestaurantsList] = useState(restaurantsList);
  return (
    <div className="body">
      <div className="search-container">
        <input className="search-input" placeholder="Search" />
      </div>
      <div className="filters">
        <button
          onClick={() => {
            const filteredRestaurantList = restaurantList.filter(
              (restaurant) => {
                return restaurant.info.avgRating >= 4;
              }
            );
            setRestaurantsList(filteredRestaurantList);
          }}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="rest-card-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
