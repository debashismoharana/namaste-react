import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API } from "./constants";

const useRestaurantDetails = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      const data = await fetch(RESTAURANT_DETAILS_API + resId);
      const json = await data.json();
      setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);
      const itemsCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards ||
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.itemCards;
      setMenuItems(itemsCards);
    };

    fetchRestaurantDetails();
  }, [resId]);

  return { restaurantDetails, menuItems };
};

export default useRestaurantDetails;
