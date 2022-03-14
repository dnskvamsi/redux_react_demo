import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={15}>
      <AppBar position="fixed" style={{ textAlign: "center" }}>
        <Link to="/">
          <Typography
            varient="h1"
            style={{ fontSize: 30, color: "white" }}
            p={2}
          >
            React Redux Shopping Demo
          </Typography>
        </Link>
      </AppBar>
    </Box>
  );
}
