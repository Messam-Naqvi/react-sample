import React from "react";
import { Card, CardMedia } from "@mui/material";

export default function CardItem({ title, img }) {
  return (
    <Card
      sx={{
        minWidth: 280,
        maxWidth: 280,
        borderRadius: 3,
        boxShadow: "none",
        p: 0,
        flexShrink: 0,
        backgroundColor: "transparent",
        border: "1px solid #ddd",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardMedia
        component="img"
        src={img}
        alt={title}
        sx={{
          borderRadius: 2,
          height: 420,
          width: "auto",
          objectFit: "cover",
          userSelect: "none",
        }}
      />
    </Card>
  );
}
