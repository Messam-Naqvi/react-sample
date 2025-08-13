import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

// Cards data
const cards = [
  {
    title: "Penny Pension",
    category: "💵 Finance",
    company: "Penny Technology Limited",
    img: "https://picsum.photos/200/200?random=1",
  },
  {
    title: "Kindred Home Swapping",
    category: "🛩️ Travel",
    company: "Kindred Concepts Inc",
    img: "https://picsum.photos/200/200?random=2",
  },
  {
    title: "Lyft",
    category: "🛩️ Travel",
    company: "Lyft, Inc.",
    img: "https://picsum.photos/200/200?random=3",
  },
  {
    title: "Opera: AI browser with VPN",
    category: "💡 Utilities",
    company: "Opera Norway AS",
    img: "https://picsum.photos/200/200?random=4",
  },
  {
    title: "VSCO Capture",
    category: "🖼 Photo & Video",
    company: "Visual Supply Company",
    img: "https://picsum.photos/200/200?random=5",
  },
  {
    title: "Jomo – Screen Time Blocker",
    category: "👩‍💻 Productivity",
    company: "Jomo",
    img: "https://picsum.photos/200/200?random=6",
  },
  {
    title: "Citizen: Protect The World",
    category: "🎙 News",
    company: "sp0n, Inc.",
    img: "https://picsum.photos/200/200?random=7",
  },
  {
    title: "Fabric: AI Notes, Files, Ideas",
    category: "👩‍💻 Productivity",
    company: "Fabric Internet",
    img: "https://picsum.photos/200/200?random=8",
  },
];

export default function CardList() {
  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={card.img}
              alt={card.title}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.category}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {card.company}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
