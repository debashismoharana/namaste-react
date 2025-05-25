import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API } from "./constants";

const useRestaurantDetails = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menuCategories, setMenuCategories] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      const data = await fetch(RESTAURANT_DETAILS_API + resId);
      const json = await data.json();
      setRestaurantDetails(json.data?.cards[2]?.card?.card?.info);
      const itemCards =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setMenuCategories(
        itemCards.filter(
          (itemCard) =>
            itemCard.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      );
    };
    fetchRestaurantDetails();
  }, [resId]);

  return { restaurantDetails, menuCategories };
};

export default useRestaurantDetails;
