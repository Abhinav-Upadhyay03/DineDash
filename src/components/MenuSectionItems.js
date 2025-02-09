import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Slide, toast } from "react-toastify";

const MenuSectionItems = (props) => {
  const { item } = props;
  const { name, price, finalPrice, defaultPrice } = item?.card?.info;
  const dispatch = useDispatch();
  const itemAddedToast = () => {
    toast.success("Item added to cart", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  const handleAddItemClick = () => {
    dispatch(addItem(item));
    itemAddedToast();
  };

  return (
    <div className="dish-container">
      <div className="dish-details">
        <p>{name}</p>
        {finalPrice ? (
          <p>
            <span className="old-price">₹{price / 100}</span> ₹
            {finalPrice / 100}
          </p>
        ) : (
          <p>₹{price / 100 || defaultPrice/100}</p>
        )}
      </div>
      <button className="dish-add-btn" onClick={() => handleAddItemClick()}>
        ADD
      </button>
    </div>
  );
};

export default MenuSectionItems;
