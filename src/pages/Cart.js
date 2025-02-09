import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <button className="clear-cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <div className="no-items-img"><img src="https://greencrow.co.in/images/emptycart.png"></img></div>
        ) : (
          <div>
            {cartItems.map((item) => (
              <CartItem item={item} key={item?.card?.info?.id} />
            ))}
          </div>
        )}{
          cartItems.length !== 0 && <Link to={"/payment-details"}> <button className="proceed-to-checkout">
        Proceed to Checkout
      </button>
      </Link>
        }
        
      </div>
      
    </>
  );
};
export default Cart;
