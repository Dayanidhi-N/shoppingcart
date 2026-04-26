import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { incrementQty, decrementQty, removeItem } from "../slices/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const finalTotal = totalPrice.toFixed(2);
  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-image"
                />

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price}</p>

                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decrementQty(item.id))}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => dispatch(incrementQty(item.id))}>
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-actions">
                  <p className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${finalTotal}</h3>
            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
