import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Pagination from "./Pagination";

// Dummy data (Replace this with your API data or props)
const cardsData = [
  { id: 1, title: "Finance Card 1", description: "Details about card 1" },
  { id: 2, title: "Finance Card 2", description: "Details about card 2" },
  { id: 3, title: "Finance Card 3", description: "Details about card 3" },
  { id: 4, title: "Finance Card 4", description: "Details about card 4" },
  { id: 5, title: "Finance Card 5", description: "Details about card 5" },
  { id: 6, title: "Finance Card 6", description: "Details about card 6" },
  { id: 7, title: "Finance Card 7", description: "Details about card 7" },
];

export default function CardList() {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate visible cards for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <>
      <Grid container spacing={2}>
        {currentCards.map((card) => (
          <Grid item xs={12} sm={4} key={card.id}>
            <Card sx={{ border: "1px solid #ddd", borderRadius: "10px" }}>
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
