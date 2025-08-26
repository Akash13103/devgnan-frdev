import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useState } from "react";
import "../Cart/Cart.css";
const Cart = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Deliver to ",
      title2: "Akash M,534260",
      description: "ShantiNagar,Palakol,W.G.,A.P.",
    },
  ];
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
          gap: 2,
        }}
      >
        {cards.map((card, index) => (
          <Card
            style={{
              "padding-right": "205%",
              paddingBottom: "20px",
              border: "1px solid #f9002b",
              backgroundColor: "rgb(249 0 43 / 6%)",
            }}
          >
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? "" : undefined}
              sx={{
                "&[data-active]": {
                  backgroundColor: "1px solid #ea516aff",
                  "&:hover": {
                    backgroundColor: "1px solid #ea516aff",
                  },
                },
              }}
            >
              <CardContent>
                <Typography
                  component="div"
                  style={{ whiteSpace: "nowrap", display: "flex", gap: "5px" }}
                >
                  <Typography component="div" style={{ whiteSpace: "nowrap" }}>
                    {card.title}
                  </Typography>
                  <Typography
                    style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    {card.title2}
                  </Typography>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        <button className="addressButton">CHANGE ADDRESS</button>
      </Box>
    </div>
  );
};

export default Cart;
