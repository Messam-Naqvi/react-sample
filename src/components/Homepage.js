import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Card,
  CardMedia,
  Chip,
} from "@mui/material";
import Pagination from "../components/Pagination";

const categories = [
  { emoji: "💼", name: "Business" },
  { emoji: "🎓", name: "Education" },
  { emoji: "📺", name: "Entertainment" },
  { emoji: "💵", name: "Finance" },
  { emoji: "🍔", name: "Food & Drink" },
  { emoji: "🏋️‍♀️", name: "Health & Fitness" },
  { emoji: "🕶", name: "Lifestyle" },
  { emoji: "🎧", name: "Music" },
  { emoji: "🚗", name: "Navigation" },
  { emoji: "🎙", name: "News" },
  { emoji: "🖼", name: "Photo & Video" },
  { emoji: "👩‍💻", name: "Productivity" },
  { emoji: "🧠", name: "Reference" },
  { emoji: "🛍", name: "Shopping" },
  { emoji: "💬", name: "Social Networking" },
  { emoji: "🛩️", name: "Travel" },
  { emoji: "💡", name: "Utilities" },
];

const cards = [
  // Page 1 - Finance
  {
    title: "FinTrack",
    category: "💵 Finance",
    company: "FinTrack Solutions",
    img: "https://scrnshts.club/wp-content/uploads/2025/08/3-2.webp",
  },
  {
    title: "Finance Insight",
    category: "💵 Finance",
    company: "Finance Insight Ltd",
    img: "https://scrnshts.club/wp-content/uploads/2025/08/4-2.webp",
  },
  {
    title: "Budget Buddy",
    category: "💵 Finance",
    company: "Budget Buddy Inc.",
    img: "https://scrnshts.club/wp-content/uploads/2025/07/1-5.webp",
  },

  // Page 2 - Finance
  {
    title: "Wealth Wizard",
    category: "💵 Finance",
    company: "Wealth Wizard Co.",
    img: "https://scrnshts.club/wp-content/uploads/2025/07/2-5.webp",
  },
  {
    title: "Smart Saver",
    category: "💵 Finance",
    company: "Smart Saver Ltd",
    img: "https://scrnshts.club/wp-content/uploads/2025/07/4-5.webp",
  },
  {
    title: "Crypto Vault",
    category: "💵 Finance",
    company: "Crypto Vault Inc.",
    img: "https://scrnshts.club/wp-content/uploads/2025/07/5-5.webp",
  },

  // Page 3 - Finance
  {
    title: "Pension Planner",
    category: "💵 Finance",
    company: "Pension Planner Co.",
    img: "https://scrnshts.club/wp-content/uploads/2025/08/1-1.webp",
  },
  {
    title: "Loan Tracker",
    category: "💵 Finance",
    company: "Loan Tracker Ltd",
    img: "https://scrnshts.club/wp-content/uploads/2025/08/2-1.webp",
  },
  {
    title: "Tax Master",
    category: "💵 Finance",
    company: "Tax Master Corp.",
    img: "https://scrnshts.club/wp-content/uploads/2025/08/3-1.webp",
  },

  // Other category cards
  {
    title: "Healthy Living",
    category: "🏋️‍♀️ Health & Fitness",
    company: "FitLife Inc.",
    img: "https://images.unsplash.com/photo-1554284126-4ae8b45b372d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "EduSmart",
    category: "🎓 Education",
    company: "EduSmart Co.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Fitness Pro",
    category: "🏋️‍♀️ Health & Fitness",
    company: "Fitness Pro",
    img: "https://images.unsplash.com/photo-1554284124-c7c9b7f7b086?auto=format&fit=crop&w=400&q=80",
  },
];


export default function Homepage() {
  const [selectedCategory, setSelectedCategory] = useState("Finance");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;
  const filteredCards = cards.filter((card) =>
    card.category.includes(selectedCategory)
  );
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", p: 4 }}>
      <Box
        sx={{
          display: "flex",
          maxWidth: 1200,
          mx: "auto",
          gap: 3,
          alignItems: "flex-start",
        }}
      >
        {/* Categories Sidebar */}
        <Box
          sx={{
            width: "25%",
            pl: 8,
            pr: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "15px",
          }}
        >
          <Typography
            variant="h6"
            sx={{ mb: 1.5, fontWeight: "bold", color: "black" }}
          >
            Categories
          </Typography>
          <List sx={{ width: "100%", p: 0 }}>
            {categories.map(({ emoji, name }) => {
              const isSelected = name === selectedCategory;
              return (
                <ListItemButton
                  key={name}
                  selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(name);
                    setCurrentPage(1);
                  }}
                  sx={{
                    borderRadius: 2,
                    mb: 0.3,
                    py: 0.1,
                    px: 1,
                    backgroundColor: isSelected ? "#e6f4ea" : "transparent",
                    color: isSelected ? "black" : "#999",
                    fontWeight: isSelected ? "bold" : "normal",
                    "&:hover": {
                      backgroundColor: isSelected ? "#d0ecd6" : "#f0f0f0",
                      color: "black",
                    },
                  }}
                >
                  <Typography sx={{ mr: 1, fontSize: 20 }}>{emoji}</Typography>
                  <ListItemText
                    primary={name}
                    sx={{
                      ".MuiListItemText-primary": {
                        fontWeight: isSelected ? "bold" : "normal",
                      },
                    }}
                  />
                </ListItemButton>
              );
            })}
          </List>
        </Box>

        {/* Cards Section */}
        <Box sx={{ width: "75%", display: "flex", flexDirection: "column" }}>
          {/* Title & Chip */}
          {currentCards.length > 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
                flexWrap: "nowrap",
                marginRight: "90px",
                
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: 20 }}>
                {currentCards[0].title}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: 12,
                    color: "text.secondary",
                  }}
                >
                  {currentCards[0].company}
                </Typography>
                <Chip
                  label={currentCards[0].category}
                  size="small"
                  sx={{
                    fontWeight: "bold",
                    bgcolor: "transparent",
                    color: "green",
                    border: "1px solid green",
                  }}
                />
              </Box>
            </Box>
          )}

          {/* Cards Grid */}
          <Box
            component="ul"
            sx={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              p: 0,
              m: 0,
            marginRight: "90px",
            }}
          >
            {currentCards.map(({ title, img }, idx) => (
              <Card
                component="li"
                key={idx}
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component="img"
                  src={img}
                  alt={title}
                  sx={{
                    height: 420,
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </Card>
            ))}
          </Box>

          {/* Horizontal Scroll Bar */}
          <Box
            sx={{
              mt: 2,
              mb: 2,
              overflowX: "auto",
              marginRight: "90px",
              whiteSpace: "nowrap",
              "&::-webkit-scrollbar": { height: 6 },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
                borderRadius: 3,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1",
              },
            }}
          >
            <Box sx={{ width: "200%", height: "1px" }} />
          </Box>

          {/* Pagination */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </Box>
      </Box>
    </Box>
  );
}
