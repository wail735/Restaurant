import { Container, Typography, Box, Button } from "@mui/material";

export default function About() {
  return (
    // About.jsx
    <Container
      maxWidth="lg"
      sx={{
        mt: { xs: 8, md: 12 }, 
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={6}
        sx={{
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src="./assets/images/about2.png.webp"
          alt="About"
          sx={{
            width: { xs: "100%", md: "50%" },
            borderRadius: 2,
            objectFit: "cover",
          }}
        />

        {/* Texte */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#ff5600",
              fontWeight: 500,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            About Our Restaurant
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 3,
              lineHeight: 1.2,
            }}
          >
            We Provide Good Food For Your Family!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 2,
              lineHeight: 1.8,
            }}
          >
            Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
            laboris nisi ufsit aliquip ex ea commodo consequat is aute irure m,
            quis nostrud exer.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected our,
            or randomised words which don't look even slightly believable. If
            you are going to use a passage.
          </Typography>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#ff5600",
              color: "#393e46",
              borderRadius: 2,
              px: 3,
              py: 1,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#ff5600",
                color: "white",
                borderColor: "#ff5600",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
