import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Signature Dishes" },
  { value: "5K+", label: "Happy Guests" },
];

export default function About() {
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 8, md: 12 }, position: "relative", zIndex: 1, pb: 4 }}
    >
      <Box
        display="flex"
        alignItems="center"
        gap={6}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        {/* Image */}
        <motion.div
          style={{ flex: 1 }}
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box
            component="img"
            src="./assets/images/about2.png.webp"
            alt="About King Food Restaurant"
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: "16px",
              objectFit: "cover",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          style={{ flex: 1 }}
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              className="section-label"
              sx={{ mb: 1.5, display: "block" }}
            >
              About Our Restaurant
            </Typography>

            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                lineHeight: 1.2,
                mb: 3,
                color: "#1e1e1e",
              }}
            >
              A Passion for Food, A Love for People
            </Typography>

            <Typography
              sx={{ color: "#6b7280", mb: 2, lineHeight: 1.85, fontFamily: "'Poppins', sans-serif" }}
            >
              Founded in 2009, King Food was born from a simple belief: that food
              should bring people together. Our kitchen blends time-honoured
              Mediterranean traditions with modern culinary artistry, creating
              dishes that comfort the soul and delight the palate.
            </Typography>

            <Typography
              sx={{ color: "#6b7280", mb: 4, lineHeight: 1.85, fontFamily: "'Poppins', sans-serif" }}
            >
              Every recipe we serve carries the story of its origin Ã¢â‚¬â€ sourced from
              local farmers, prepared by passionate chefs, and presented to guests
              who deserve nothing less than the extraordinary.
            </Typography>

            {/* Stats row */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 2,
                mb: 4,
              }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="stat-card"
                >
                  <Typography
                    sx={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.9rem",
                      fontWeight: 800,
                      color: "#ff5600",
                      lineHeight: 1,
                      mb: 0.5,
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{ color: "#6b7280", fontSize: "0.8rem", fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.label}
                  </Typography>
                </motion.div>
              ))}
            </Box>

            <Button
              variant="outlined"
              href="/menu"
              sx={{
                borderColor: "#ff5600",
                color: "#ff5600",
                borderRadius: "10px",
                px: 3.5,
                py: 1.2,
                textTransform: "none",
                fontWeight: 600,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "0.95rem",
                "&:hover": {
                  backgroundColor: "#ff5600",
                  color: "#fff",
                  borderColor: "#ff5600",
                },
              }}
            >
              Explore Our Menu
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
}


