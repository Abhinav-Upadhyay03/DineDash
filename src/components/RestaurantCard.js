import { CDN_URL, LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    areaName,
    avgRatingString,
    costForTwo,
    cloudinaryImageId,
    cuisines,
    sla,
  } = resData.info;

  return (
    <div className="card-container">
      <div className="rating">{avgRatingString}</div>
      <img className="card-image" src={CDN_URL + cloudinaryImageId} alt="" />
      <div className="card-details">
        <div className="name">{name}</div>
        <div className="areaName">{areaName}</div>
        
        <div className="cuisines">{cuisines.join(", ")}</div>
        <div className="card-last-line">
          <div className="cost">{costForTwo}</div>
        <div className="time">{sla.slaString}</div>
        </div>
        
      </div>
    </div>
  );
};

export const vegRestaurantCard = (RestaurantCard) => {
  return(props) => {
    return(
      <>
        <div className="image-container">
          <label className="veg-label">Veg</label>
        </div>
        <RestaurantCard {...props} />
        </>
      
    )
  }
}

export default RestaurantCard;
