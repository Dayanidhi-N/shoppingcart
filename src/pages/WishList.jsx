import { useSelector } from "react-redux";
import ProductList from "../components/ProductList";
import "./WishList.css";

const WishList = () => {
  const products = useSelector((state) => state.wishList);

  return (
    <div className="wishlist-page">
      <h2 className="wishlist-title">My Wishlist</h2>

      {products.length === 0 ? (
        <div className="empty-state">
          <p>💔 Your wishlist is empty</p>
          <span>Add items you love ❤️</span>
        </div>
      ) : (
        <ProductList products={products} />
      )}
    </div>
  );
};

export default WishList;
