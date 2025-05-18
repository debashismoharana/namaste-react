import { useParams } from "react-router";
import useRestaurantDetails from "../utils/useRestaurantDetails";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const { restaurantDetails, menuItems } = useRestaurantDetails(resId);

  return (
    <div className="flex flex-col items-center m-2">
      <h1 className="text-xl font-bold">{restaurantDetails?.name}</h1>
      <h4>{restaurantDetails?.cuisines.join(", ")}</h4>
      <ul className="flex flex-col flex-wrap w-10/12 items-center mt-4">
        {menuItems?.map((item) => {
          return (
            <li
              key={item?.card?.info?.id}
              className="flex flex-col w-9/12 justify-center border-b-2 border-gray-300 p-2 items-center"
            >
              <p className="p-1 text-lg font-semibold">
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
