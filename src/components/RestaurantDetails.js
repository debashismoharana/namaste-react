import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL, RES_LOGO_URL } from "../common/constants";

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

  const {
    name,
    cuisines,
    areaName,
    city,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resDetails?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div className="restaurant-details">
      <h1>{name}</h1>
      <div className="res-more-details">
        <div>
          <div>{cuisines.join(", ")}</div>
          <div>
            {areaName}, {city}
          </div>
        </div>
        <div>
          <div>
            ⭐️{avgRating} ({totalRatingsString})
          </div>
          <div>Cost: {costForTwoMessage}</div>
        </div>
      </div>
      <hr />
      <div className="offers">Offers and Coupons</div>
      <hr />
      <div className="menu-items">
        {itemCards?.map((item) => {
          const itemInfo = item.card.info;
          return (
            <div key={itemInfo?.id} className="menu-item">
              <div className="item-details">
                <div>{itemInfo?.name}</div>
                <div>₹ {itemInfo?.price / 100}</div>
                <div className="item-description">{itemInfo?.description}</div>
              </div>
              <div>
                <img
                  className="item-image"
                  src={RES_LOGO_URL + itemInfo?.imageId}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantDetails;
