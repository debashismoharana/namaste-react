import { useState, useEffect } from "react";
import { RES_DETAILS_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resDetails, getResDetails] = useState(null);
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  const getRestaurantMenu = async () => {
    const data = await fetch(RES_DETAILS_URL + resId);
    const json = await data.json();
    getResDetails(json);
  };

  return resDetails;
};

export default useRestaurantMenu;
