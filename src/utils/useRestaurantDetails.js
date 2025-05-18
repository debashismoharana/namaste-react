import { useState, useEffect } from "react";

const [restaurantDetails, setRestaurantDetails] = useState(null);
const [menuItems, setMenuItems] = useState(null);

const useRestaurantDetails = async (resId) => {
  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  fetchRestaurantDetails = async () => {
    const data = await fetch(RESTAURANT_DETAILS_API + resId);
    const json = await data.json();
    setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);
    const itemsCards =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards ||
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    setMenuItems(itemsCards);

    return restaurantDetails, menuItems;
  };
};

export default useRestaurantDetails;
