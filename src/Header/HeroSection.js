import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('./assets/images/steak.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: { xs: 3, md: 12 },
        pt: { xs: 10, md: 18 },
        position: "relative",
        color: "#1e1e1e",
      }}
    >
    
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          backgroundColor: "transparent", 
          borderRadius: "12px",
          p: 4,
        }}
      >
        <Typography color="#ff5600" fontWeight="bold" fontSize="0.9rem" mb={1}>
          Discover Your Taste
        </Typography>

        <Typography
          variant="h2"
          fontWeight={700}
          sx={{ fontSize: { xs: "2.3rem", md: "3.5rem" }, lineHeight: 1.2 }}
        >
          We believe good food<br />
          offers a great smile
        </Typography>

        <Typography
          sx={{
            mt: 2,
            mb: 3,
            color: "#555",
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff5600",
            color: "#fff",
            px: 4,
            py: 1.5,
            textTransform: "none",
            borderRadius: "8px",
            fontWeight: "600",
            "&:hover": {
              backgroundColor: "#e94e00",
            },
          }}
        >
          Reservation
        </Button>
      </Box>
    </Box>
  );
}
