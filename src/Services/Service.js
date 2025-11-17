import { Box, Typography } from "@mui/material";

export default function Service() {
  const services = [
    {
      id: 1,
      icon: "./assets/images/cooking.png",
      title: "Best Chef",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      id: 2,
      icon: "./assets/images/stir-fry.png",
      title: "Quality Food",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      id: 3,
      icon: "./assets/images/cooking.png",
      title: "Perfect Cook",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
  ];

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      {/* Titre */}
      <Typography sx={{ color: "#ff5900", fontWeight: 500 }}>
        Services We Offer
      </Typography>
      <Typography
        variant="h3"
        sx={{ color: "#212025", fontWeight: 700, mb: 8 }}
      >
        Our Best Services
      </Typography>

      {/* Liste des services */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service) => (
          <Box
            key={service.id}
            className="flex flex-col items-center text-center p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            sx={{
              bgcolor: service.id === 2 ? "#fff" : "transparent",
              boxShadow:
                service.id === 2 ? "0 10px 25px rgba(255,89,0,0.1)" : "none",
            }}
          >
            <img
              alt={service.title}
              src={service.icon}
              className="w-14 h-14 mb-4"
            />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              {service.title}
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: "0.95rem", lineHeight: 1.6 }}
            >
              {service.description}
            </Typography>
          </Box>
        ))}
      </div>
    </div>
  );
}
