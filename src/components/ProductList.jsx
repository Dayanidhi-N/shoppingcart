import "./ProductList.css";
import { useDispatch } from "react-redux";
import { addItem } from "../slices/CartSlice";
import WishlistIcon from "./WishlistIcon";

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="wish-list">
            <WishlistIcon product={product} />
          </div>

          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />

          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
