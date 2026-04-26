import { useEffect } from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../asyncThunk/productThunk";

const Product = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.products));
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "20px 0px" }}>
        Product Dashboard
      </h2>
      <ProductList products={products} />
    </div>
  );
};

export default Product;
