import { Container, Typography, Box } from "@mui/material";

export default function Discover() {
  const infos = [
    {
      id: 1,
      icon: "./assets/images/cooking.png",
      descreption: "Ut enim ad minim veniam, quis nostrud exer.",
    },
    {
      id: 2,
      icon: "./assets/images/stir-fry.png",
      descreption: "Ut enim ad minim veniam, quis nostrud exer.",
    },
    {
      id: 3,
      icon: "./assets/images/chef.png",
      descreption: "Ut enim ad minim veniam, quis nostrud exer.",
    },
    {
      id: 4,
      icon: "./assets/images/cooking.png",
      descreption: "Ut enim ad minim veniam, quis nostrud exer.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Texte + infos */}
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ color: "#ff5600", mb: 2 }}>
              Discover Your Test
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "2rem", md: "3rem" },
              }}
            >
              We Provide Good Food <br />
              For Your Family!
            </Typography>

            <Typography
              sx={{
                maxWidth: "600px",
                color: "gray",
                mb: 4,
                lineHeight: "1.8",
              }}
            >
              Ut enim acgsd minim veniam, quxcis nostrud exercitation ullamco
              laboris nisi ufsit aliquip ex ea commodo consequat is aute irure
              m, quis nostrud exer.
            </Typography>

            {/* infos icons */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                gap: 3,
              }}
            >
              {infos.map((inf) => (
                <Box
                  key={inf.id}
                  sx={{ display: "flex", alignItems: "start", gap: 2 }}
                >
                  <img
                    src={inf.icon}
                    alt="icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "contain",
                    }}
                  />
                  <Typography
                    sx={{ color: "text.secondary", fontSize: "0.9rem" }}
                  >
                    {inf.descreption}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                
                transform: "scale(1.03)",
                
              },
            }}
          >
            <img
              alt="chef"
              src="./assets/images/chef.jpg"
              style={{
                width: "400px",
                maxWidth: "100%",
                height: "auto",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
