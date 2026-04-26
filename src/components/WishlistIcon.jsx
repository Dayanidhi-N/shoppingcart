import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, removeFromWishList } from "../slices/WishList";

const WishlistIcon = ({ product }) => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);

  const isLiked = wishList.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isLiked) {
      dispatch(removeFromWishList(product.id));
    } else {
      dispatch(addToWishList(product));
    }
  };

  return isLiked ? (
    <FaHeart
      onClick={handleClick}
      style={{ cursor: "pointer", color: "#22c55e", fontSize: "20px" }}
    />
  ) : (
    <FaRegHeart
      onClick={handleClick}
      style={{ cursor: "pointer", color: "#22c55e", fontSize: "20px" }}
    />
  );
};

export default WishlistIcon;
