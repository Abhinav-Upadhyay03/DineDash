import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuSectionItems = (props) => {
  const { item } = props;
  const { name, price, finalPrice, defaultPrice, id } = item?.card?.info;
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  // Check if item is in cart and get its quantity
  const cartItem = cartItems.find(
    (cartItem) => cartItem?.card?.info?.id === id
  );
  const quantity = cartItem?.quantity || 0;

  const handleAddItemClick = () => {
    dispatch(addItem(item));
  };

  const handleRemoveItemClick = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="dish-container">
      <div className="dish-details">
        <p className="dish-name">{name}</p>
        {finalPrice ? (
          <p className="dish-price">
            <span className="old-price">₹{price / 100}</span> ₹
            {finalPrice / 100}
          </p>
        ) : (
          <p className="dish-price">₹{price / 100 || defaultPrice / 100}</p>
        )}
      </div>

      <div className="dish-actions">
        {quantity > 0 ? (
          <div className="quantity-controls-inline">
            <button
              className="quantity-btn-inline"
              onClick={handleRemoveItemClick}
              aria-label="Remove item"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="quantity-display-inline">{quantity}</span>
            <button
              className="quantity-btn-inline"
              onClick={handleAddItemClick}
              aria-label="Add item"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>
        ) : (
          <button
            className="dish-add-btn"
            onClick={handleAddItemClick}
            aria-label="Add to cart"
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuSectionItems;
