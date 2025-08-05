import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.quantity || 1);
    }, 0);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <Link to={"./"}>
          <div className="logo-text">
            <span className="logo-dine">Dine</span>
            <span className="logo-dash">Dash</span>
          </div>
        </Link>
      </div>

      <ul className="header-items">
        <Link to={"./cart"}>
          <li>
            <i className="ri-shopping-cart-line"></i>
            {getTotalItems() > 0 && (
              <span className="cart-length">{getTotalItems()}</span>
            )}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
