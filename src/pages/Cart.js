import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "../components/CartItem";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price =
        item.card.info.finalPrice ||
        item.card.info.price ||
        item.card.info.defaultPrice;
      const quantity = item.quantity || 1;
      return total + (price / 100) * quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.quantity || 1);
    }, 0);
  };

  const handleProceedToCheckout = () => {
    const totalItems = getTotalItems();
    const totalAmount = calculateTotal();

    // Clear the cart first
    dispatch(clearCart());

    // Navigate to payment with the calculated values as URL parameters
    navigate(
      `/payment-details?items=${totalItems}&amount=${totalAmount.toFixed(2)}`
    );
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Cart</h1>
        {cartItems.length > 0 && (
          <button className="clear-cart-button" onClick={handleClearCart}>
            <i className="ri-delete-bin-line"></i>
            Clear Cart
          </button>
        )}
      </div>

      <div className="cart-body">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="ri-shopping-cart-line"></i>
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="start-shopping-btn">
              <i className="ri-restaurant-line"></i>
              Start Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <CartItem item={item} key={item?.card?.info?.id} />
              ))}
            </div>

            <div className="cart-summary">
              <div className="cart-total">
                <span>Total Amount:</span>
                <span className="total-price">
                  ₹{calculateTotal().toFixed(2)}
                </span>
              </div>
              <div className="cart-items-count">
                <span>Total Items: {getTotalItems()}</span>
              </div>
              <p className="delivery-info">
                <i className="ri-truck-line"></i>
                Delivery charges and taxes will be calculated at checkout
              </p>
              <button
                className="proceed-to-checkout"
                onClick={handleProceedToCheckout}
              >
                <i className="ri-arrow-right-line"></i>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
