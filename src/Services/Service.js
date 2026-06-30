import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
  }),
};

const services = [
  {
    id: 1,
    icon: "./assets/images/chef.png",
    title: "Award-Winning Chefs",
    description:
      "Our culinary team has been recognised at national competitions for excellence in Mediterranean and fusion cuisine, bringing world-class skill to every plate.",
  },
  {
    id: 2,
    icon: "./assets/images/stir-fry.png",
    title: "Premium Quality Food",
    description:
      "We partner with certified local producers to source only the freshest, seasonal ingredients — because great flavour starts long before the kitchen.",
  },
  {
    id: 3,
    icon: "./assets/images/cooking.png",
    title: "Authentic Recipes",
    description:
      "Each dish is rooted in tradition yet elevated with contemporary techniques, delivering the honest, bold flavours that keep guests coming back.",
  },
];

export default function Service() {
  return (
    <div className="flex flex-col items-center mt-20 px-4 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <Typography className="section-label" sx={{ mb: 1, display: "block" }}>
          Services We Offer
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 800,
            fontSize: { xs: "1.9rem", md: "2.6rem" },
            color: "#1e1e1e",
            mb: 8,
          }}
        >
          Why Guests Choose Savoria
        </Typography>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, i) => (
          <MotionBox
            key={service.id}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: 4,
              borderRadius: "16px",
              border: "1.5px solid transparent",
              transition: "all 0.35s ease",
              cursor: "default",
              "&:hover": {
                border: "1.5px solid #ff5600",
                boxShadow: "0 12px 36px rgba(255,86,0,0.12)",
                transform: "translateY(-6px)",
                backgroundColor: "#fff",
              },
            }}
          >
            <Box
              sx={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "#fff5ed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 3,
                transition: "background 0.3s ease",
              }}
            >
              <img
                alt={service.title}
                src={service.icon}
                loading="lazy"
                style={{ width: "38px", height: "38px", objectFit: "contain" }}
              />
            </Box>
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                mb: 1.5,
                color: "#1e1e1e",
              }}
            >
              {service.title}
            </Typography>
            <Typography
              sx={{ color: "#6b7280", fontSize: "0.92rem", lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}
            >
              {service.description}
            </Typography>
          </MotionBox>
        ))}
      </div>
    </div>
  );
}
