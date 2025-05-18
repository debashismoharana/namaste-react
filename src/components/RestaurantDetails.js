import { useParams } from "react-router";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resId } = useParams();
  useRestaurantDetails(resId);

  return (
    <div className="restaurant-details">
      <h1>{restaurantDetails?.name}</h1>
      <h4>{restaurantDetails?.cuisines.join(", ")}</h4>
      <ul className="menu-items">
        {menuItems?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              <p>
                {item?.card?.info?.name} - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
              {item?.card?.info?.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
