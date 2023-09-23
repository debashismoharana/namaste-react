import { RES_LOGO_URL } from "../common/constants";

const RestaurantCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    areaName,
    cuisines,
    avgRating,
    sla,
    costForTwo,
    totalRatingsString,
  } = props.resData.info;
  return (
    <div className="rest-card">
      <img
        className="card-image"
        src={RES_LOGO_URL + cloudinaryImageId}
        alt="food item"
      />
      <h4>
        {name} <br />
        📍{areaName}
      </h4>
      <div>
        <b>Cuisines:</b> {cuisines.join(", ")}
      </div>
      <div>
        <b>Rating:</b> ⭐️ {avgRating} ({totalRatingsString} Ratings)
      </div>
      <div>
        <b>ETA:</b> {sla.deliveryTime} mins
      </div>
      <div>
        <b>Cost:</b> {costForTwo}
      </div>
    </div>
  );
};

export default RestaurantCard;
