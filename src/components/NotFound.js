import React from "react";
import Box from "@mui/material/Box";
import { Typography, Paper } from "@mui/material";
export default function NotFound() {
  return (
    <Box
      sx={{ width: "50%" }}
      m="auto"
      style={{
        backgroundColor: "white",
        textAlign: "center",
        borderRadius: 20,
      }}
    >
      <Typography varient="h1" mt={10} p={10} style={{ fontSize: 35 }}>
        Page Not Found
      </Typography>
    </Box>
  );
}
