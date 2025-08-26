import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Cart from "../Cart/Cart";
import CardFirst from "../Card/CardFirst";
import CardSecond from "../Card/CardSecond";
import CardThird from "../Card/CardThird";
import CardOne from "../CardRight/CardOne";
import CardTwo from "../CardRight/CardTwo";
import CardThree from "../CardRight/CardThree";
import CardFour from "../CardRight/CardFour";
function GridBase() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          "margin-top": "20px",
          "margin-left": "300px",
          "margin-right": "100px",
          padding: "5px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={8}>
            <Cart />
          </Grid>
          <Grid size={4}>
            <CardOne />
          </Grid>
          <Grid size={8} wrap="nowrap">
            <CardFirst />
          </Grid>
          <Grid size={4}>
            <CardTwo />
          </Grid>
          <Grid size={8}>
            <CardSecond />
          </Grid>
          <Grid size={4}>
            <CardThree />
          </Grid>
          <Grid size={8}>
            <CardThird />
          </Grid>
          <Grid size={4}>
            <CardFour />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default GridBase;
