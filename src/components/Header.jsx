import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cartlength = useSelector((store) => store.cart);
  return (
    <header className="header">
      <div className="logo">🛒 ReduxToolkit</div>

      <nav className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          WishList
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "nav-item active-link" : "nav-item"
          }
        >
          <FaShoppingCart className="cart-icon" />
          <span className="cart-count">{cartlength.length}</span>
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
