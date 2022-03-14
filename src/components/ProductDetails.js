import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productAction";
import Loading from "./Loading";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { CardContent, Box } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function ProductDetails() {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  React.useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
  }, [productId]);

  if (Object.keys(product).length === 0) {
    return <Loading />;
  } else {
    return (
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
          <Box>
            <img
              src={image}
              alt={title}
              style={{ width: "80%", height: 500, borderRadius: 20 }}
            ></img>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} style={{ textAlign: "center" }}>
          <Box style={{ textAlign: "center" }}>
            <Card
              style={{
                display: "flex",
                height: 500,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                textAlign: "center",
                width: "80%",
                borderRadius: 20,
              }}
            >
              <CardContent>
                <Typography varient="h1" style={{ fontSize: 25 }} ml={3}>
                  {title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography varient="h5">Price: ${price}</Typography>
              </CardContent>
              <CardContent>
                <Typography varient="body2">Category:- {category}</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
