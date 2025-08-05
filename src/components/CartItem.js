import { useDispatch } from "react-redux";
import { removeItem, addItem, removeItemCompletely } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CartItem = ({ item }) => {
  const { name, price, id, finalPrice, defaultPrice, imageId } =
    item?.card?.info;
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeItem(id));
  };

  const handleAddClick = () => {
    dispatch(addItem(item));
  };

  const handleRemoveCompletely = () => {
    dispatch(removeItemCompletely(id));
  };

  const itemPrice = finalPrice || price || defaultPrice;
  const quantity = item.quantity || 1;

  return (
    <div className="cart-card-container">
      <div className="cart-card-image-container">
        <img className="cart-card-image" src={CDN_URL + imageId} alt={name} />
      </div>

      <div className="cart-card-left">
        <div className="cart-card-details">
          <h3 className="cart-card-name">{name}</h3>
          <div className="cart-item-price">₹{(itemPrice / 100).toFixed(2)}</div>
        </div>

        <div className="cart-item-actions">
          <div className="quantity-controls">
            <button
              className="quantity-btn"
              onClick={handleRemoveClick}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <i className="ri-subtract-line"></i>
            </button>
            <span className="quantity-display">{quantity}</span>
            <button
              className="quantity-btn"
              onClick={handleAddClick}
              aria-label="Increase quantity"
            >
              <i className="ri-add-line"></i>
            </button>
          </div>

          <button
            className="remove-item-btn"
            onClick={handleRemoveCompletely}
            aria-label="Remove item completely"
          >
            <i className="ri-delete-bin-line"></i>
            Remove
          </button>
        </div>
      </div>

      <div className="cart-card-price">
        <span className="price-label">Total:</span>
        <span className="price-amount">
          ₹{((itemPrice / 100) * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
