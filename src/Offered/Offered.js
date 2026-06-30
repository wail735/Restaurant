import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import Properties from "./Properties";

export default function Offered() {
  const infos = ["Special", "Lunch", "Breakfast", "Dinner"];
  const [activeCategory, setActiveCategory] = useState("Special");

  return (
    <Box className="relative w-full">
      {/* Image background */}
      <Box className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] mt-10">
        <img
          src="./assets/images/plat-white.jpg"
          alt="offered"
          className="w-full h-full object-cover"
        />
        <Box className="absolute inset-0 bg-gray-900 bg-opacity-40" />
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl text-center">
          <Typography
            variant="body2"
            sx={{
              color: "#ff5e00",
              fontWeight: 500,
              mb: { xs: 1, md: 2 },
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            Our Offered Menu
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              mb: { xs: 3, md: 4 },
              lineHeight: 1.2,
            }}
          >
            Some Trendy And Popular Courses Offered
          </Typography>

          {/* Buttons */}
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 2 }}
            flexWrap="wrap"
            justifyContent="center"
          >
            {infos.map((inf) => (
              <Button
                key={inf}
                variant={activeCategory === inf ? "contained" : "outlined"}
                onClick={() => setActiveCategory(inf)}
                sx={{
                  bgcolor: activeCategory === inf ? "#ff5e00" : "transparent",
                  color: "#fff",
                  borderColor: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  px: { xs: 2, sm: 3 },
                  py: { xs: 1, sm: 1.5 },
                  borderRadius: "20px",
                  fontSize: { xs: "0.7rem", sm: "0.9rem" },
                  "&:hover": {
                    bgcolor:
                      activeCategory === inf
                        ? "#e85500"
                        : "rgba(255,255,255,0.2)",
                  },
                }}
              >
                {inf}
              </Button>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Properties component */}
      <Properties activeCategory={activeCategory} />
    </Box>
  );
}
