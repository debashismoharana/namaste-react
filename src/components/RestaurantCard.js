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
    <div className="flex flex-col w-64 p-2 m-2 bg-gray-100 shadow-lg rounded-lg hover:bg-gray-200 h-96">
      <img
        className="w-60 rounded-lg"
        alt="restaurant"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <div className="font-extrabold py-2">{name}</div>
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
