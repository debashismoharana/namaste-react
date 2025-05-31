import { useState } from "react";
import { useParams } from "react-router";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import MenuCategory from "./MenuCategory";

const RestaurantDetails = () => {
  const { resId } = useParams();
  const { restaurantDetails, menuCategories } = useRestaurantDetails(resId);
  const [showAccordionIndex, setShowAccordionIndex] = useState(0);

  return (
    <div className="flex flex-col items-center m-2">
      <h1 className="text-xl font-bold">{restaurantDetails?.name}</h1>
      <h4>{restaurantDetails?.cuisines.join(", ")}</h4>
      <div className="flex flex-col flex-wrap w-10/12 items-center mt-4">
        {menuCategories?.map((category, index) => {
          return (
            <MenuCategory
              key={category?.card?.card?.title}
              title={category?.card?.card?.title}
              menuItems={category?.card?.card?.itemCards}
              showItems={index === showAccordionIndex ? true : false}
              setShowAccordionIndex={() => setShowAccordionIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
