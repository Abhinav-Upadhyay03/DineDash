import React from "react";
import MenuSectionItems from "./MenuSectionItems";

const MenuSection = ({sectionData, sectionOpen, setShowSection}) => {
  

  const { itemCards } = sectionData?.card?.card;
    
  return (
    <div className="manu-section" >
      <div className="menu-title" onClick={() => {
            setShowSection();
          }}>
        <h4>{sectionData?.card?.card?.title} ({itemCards.length})</h4>
        <button
          className="arrow-btn"
          
        >
          {sectionOpen ? (
            <i className="ri-arrow-up-line"></i>
          ) : (
            <i className="ri-arrow-down-line"></i>
          )}
        </button>
      </div>
      { sectionOpen && itemCards.map((item) => (
        <MenuSectionItems key={item?.card?.info?.id} item={item} />
      ))}
    </div>
  );
};

export default MenuSection;
