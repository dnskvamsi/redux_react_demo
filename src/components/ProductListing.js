import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CSS/product-listing.css";
import ProductCard from "./ProductCard";
import axios from "axios";
import { setProducts } from "../redux/actions/productAction";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };
  React.useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="product-grid">
      <ProductCard />
    </div>
  );
}
