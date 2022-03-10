import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";
import "../CSS/product-details.css";
import Loading from "./Loading";

export default function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  console.log("product", product);
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response);
    dispatch(selectedProduct(response.data));
  };

  React.useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);

  if (Object.keys(product).length === 0) {
    console.log("inside if", product);
    return <Loading />;
  } else {
    return (
      <div className="product-details">
        <div className="img-container">
          <img src={image} alt={title}></img>
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="price">Price:- ${price}</div>
          <div className="category">Category:-{category}</div>
        </div>
      </div>
    );
  }
}
