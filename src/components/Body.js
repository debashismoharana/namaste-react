import restaurantList from "../common/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input className="search-input" placeholder="Search" />
      </div>
      <div className="rest-card-container">
        {restaurantList.map((restaurantList) => {
          return (
            <RestaurantCard
              key={restaurantList.info.id}
              resData={restaurantList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
