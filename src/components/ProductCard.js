import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
const imgStyle = {
  height: 500,
  width: 400,
};
export default function ProductCard() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <Grid item md={6} lg={4} sm={12} key={id}>
        <Link to={{ pathname: `/product/${id}` }}>
          <Card
            variant="outlined"
            elevation={15}
            style={{ height: 700, borderRadius: 30 }}
          >
            <CardHeader title={title} subheader={category} />
            <CardMedia height="400">
              <img src={image} alt={title} style={imgStyle} />
            </CardMedia>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                ${price}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    );
  });
  return (
    <React.Fragment>
      {products.length === 0 ? <Loading /> : renderList}
    </React.Fragment>
  );
}
