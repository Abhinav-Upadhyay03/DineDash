import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import MenuShimmer from "../components/MenuShimmer";
import MenuSection from "../components/MenuSection";
import useResMenu from "../utils/useResMenu";
import { Slide, ToastContainer } from "react-toastify";

const Menu = () => {
  const { resId } = useParams();
  const resData = useResMenu(resId);
  const [showSection, setShowSection] = useState(-1);
  if (resData === null) {
    return <MenuShimmer />;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    city,
    locality,
    cloudinaryImageId,
  } = resData?.data?.cards[2]?.card?.card?.info;
  const { minDeliveryTime, maxDeliveryTime } =
    resData?.data?.cards[2]?.card?.card?.info?.sla;

  const { cards } = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const displaySections = cards.filter(
    (card) => card?.card?.card?.title && card?.card?.card?.itemCards
  );

  return (
    <div className="menu-section">
      <p className="headline">
        Home / {city} / <span className="headline-name">{name}</span>
      </p>
      <h1>{name}</h1>
      <div className="details-box">
        <div className="details-box-text">
          <p className="details-box-rating">
            {avgRatingString} ({totalRatingsString})
          </p>
          <p className="details-box-cost">{costForTwoMessage}</p>
          <p className="details-box-city">
            {locality}, {city}
          </p>
          <p className="details-box-time">
            {minDeliveryTime} - {maxDeliveryTime} mins
          </p>
        </div>
        <img
          className="details-box-img"
          src={CDN_URL + cloudinaryImageId}
          alt=""
        />
      </div>
      <div>
        {displaySections.map((card, index) => (
          <MenuSection
            key={card?.card?.card?.title}
            sectionData={card}
            sectionOpen={index === showSection ? true : false}
            setShowSection={() => {
              index === showSection
                ? setShowSection(-1)
                : setShowSection(index);
            }}
          />
        ))}
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default Menu;
