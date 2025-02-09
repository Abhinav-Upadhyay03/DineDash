import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CartItem = ({ item }) => {
  const { name, price, id, finalPrice, defaultPrice} = item?.card?.info;
  const dispatch = useDispatch();
  const handleRemoveClick = () => {
    dispatch(removeItem(item?.card?.info?.id));
  };
  return (
    <div className="cart-card-container">
      <div className="cart-card-left">
        <img className="cart-card-image" src={CDN_URL+item?.card?.info?.imageId} alt="" />
      
      <div className="cart-card-details">
        <p className="cart-card-name">{name}</p>
        <p>Item No.: {id}</p>
        <button onClick={() => handleRemoveClick()}>Remove</button>
      </div>
      </div>
        
      <div className="cart-card-price">₹{finalPrice/100 || price / 100 || defaultPrice/100}</div>
    </div>
  );
};

export default CartItem;
