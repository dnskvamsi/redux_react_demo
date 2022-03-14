import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import axios from "axios";
import Loading from "./Loading";
import { setProducts } from "../redux/actions/productAction";

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
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

  if (products.length === 0) {
    return <Loading />;
  } else {
    return (
      <Grid
        container
        rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        style={{ textAlign: "center" }}
      >
        <ProductCard />
      </Grid>
    );
  }
}
