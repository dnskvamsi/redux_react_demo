import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
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
