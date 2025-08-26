import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useState } from "react";
import DiscountIcon from "@mui/icons-material/Discount";
import ShowMore from "./ShowMore";
const CardFirst = () => {
  const [selectedCard, setSelectedCard] = useState(0);
  const cards = [
    {
      id: 1,
      title2: "Available Offers",
      description: "100% Instant Discount on ICICI Bank Credit & Debit Card",
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
            style={{ "padding-right": "205%", border: "1px solid #f9002b" }}
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
                  <DiscountIcon />
                  <Typography
                    style={{ whiteSpace: "nowrap", fontWeight: "bold" }}
                  >
                    {card.title2}
                  </Typography>
                </Typography>

                <Typography variant="body2" color="text.secondary" style={{whiteSpace:"nowrap"}}>
                  {card.description}
                </Typography>
                <ShowMore/>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default CardFirst;
