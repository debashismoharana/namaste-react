import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../common/constants";

const RestaurantDetails = () => {
  const [resDetails, setResDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = async () => {
    const data = await fetch(RES_DETAILS_URL + id);
    const jsonData = await data.json();
    setResDetails(jsonData);
  };

  if (resDetails === null) return false;

  const { name } = resDetails?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div className="res-details">
      <div>name: {name}</div>
      <div>cuisines</div>
      <div className="menu-items">
        <ul>
          {itemCards?.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - {item.card.info.price}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
