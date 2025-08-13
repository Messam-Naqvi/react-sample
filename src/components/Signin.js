// src/components/Signin.js
import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Alert
} from "@mui/material";

export default function Signin({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Static credentials
    if (email === "test@example.com" && password === "1234") {
      onLoginSuccess();
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to bottom right, #e3f2fd, #bbdefb)"
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 3
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#1976d2" }}
        >
          Sign In
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2, fontSize: "0.9rem" }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "#1976d2",
              ":hover": { bgcolor: "#1565c0" },
              fontWeight: "bold"
            }}
          >
            Sign In
          </Button>
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 3, color: "text.secondary" }}
        >
          Use <strong>test@example.com</strong> / <strong>password</strong> to log in
        </Typography>
      </Paper>
    </Box>
  );
}
