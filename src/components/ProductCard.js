import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
export default function ProductCard() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="product" key={id}>
        {/* <BrowserRouter> */}
        <Link to={{ pathname: `/product/${id}` }}>
          <div className="card">
            <div className="img-container">
              <img src={image} alt={title}></img>
            </div>
            <div className="content">
              <div className="title">{title}</div>
              <div className="price">Price:- ${price}</div>
              <div className="category">Category:- {category}</div>
            </div>
          </div>
        </Link>
        {/* </BrowserRouter> */}
      </div>
    );
  });
  return (
    <React.Fragment>
      {products.length === 0 ? <Loading /> : renderList}
    </React.Fragment>
  );
}
