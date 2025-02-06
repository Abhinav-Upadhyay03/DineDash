import React, { useState } from "react";
import MenuSectionItems from "./MenuSectionItems";

const MenuSection = (props) => {
  const [sectionOpen, setSectionOpen] = useState(false);
  const { sectionData } = props;
  const { itemCards } = sectionData?.card?.card;
    
  return (
    <div className="manu-section">
      <div className="menu-title">
        <h4>{sectionData?.card?.card?.title}</h4>
        <button
          className="arrow-btn"
          onClick={() => {
            setSectionOpen(!sectionOpen);
          }}
        >
          {sectionOpen ? (
            <i className="ri-arrow-up-line"></i>
          ) : (
            <i className="ri-arrow-down-line"></i>
          )}
        </button>
      </div>
      { sectionOpen ? itemCards.map((item) => (
        <MenuSectionItems key={item?.card?.info?.id} item={item} />
      )) : <></>}
    </div>
  );
};

export default MenuSection;
