import { Link, useSearchParams } from "react-router-dom";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const totalItems = parseInt(searchParams.get("items") || "0");
  const totalAmount = parseFloat(searchParams.get("amount") || "0");

  return (
    <div className="payment-success-page">
      <div className="payment-success-card">
        <div className="success-icon">
          <i className="ri-check-line"></i>
        </div>

        <h1>Payment Successful!</h1>
        <p className="success-message">
          Thank you for your order. Your payment has been processed
          successfully.
        </p>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-details">
            <div className="order-item">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="order-item">
              <span>Total Amount:</span>
              <span className="order-total">₹{totalAmount.toFixed(2)}</span>
            </div>
            <div className="order-item">
              <span>Order ID:</span>
              <span>
                #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </span>
            </div>
          </div>
        </div>

        <div className="delivery-info">
          <i className="ri-truck-line"></i>
          <p>Your order will be delivered within 30-45 minutes</p>
        </div>

        <Link to="/" className="continue-shopping-btn">
          <i className="ri-restaurant-line"></i>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Payment;
