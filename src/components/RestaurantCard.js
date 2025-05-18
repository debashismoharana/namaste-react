import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const {
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    sla,
    costForTwo,
    cloudinaryImageId,
  } = props.resData.info;

  return (
    <div className="restaurant-card">
      <img
        className="res-image"
        alt="restaurant"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="res-name">{name}</div>
      <div className="res-rating">
        Rating: {avgRating} ({totalRatingsString})
      </div>
      <div className="res-cuisines">{cuisines.join(", ")}</div>
      <div className="res-delivery-time">Time: {sla?.deliveryTime} Minutes</div>
      <div className="res-cost">{costForTwo}</div>
    </div>
  );
};

export default RestaurantCard;
