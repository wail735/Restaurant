import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        width: "100%",
        backgroundImage: "url('./assets/images/steak.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "scroll", md: "fixed" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(110deg, rgba(10,8,5,0.75) 0%, rgba(10,8,5,0.45) 60%, rgba(10,8,5,0.15) 100%)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: { xs: "100%", md: "55%" },
          px: { xs: 3, sm: 6, md: 12 },
          pt: { xs: 14, md: 0 },
        }}
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <MotionTypography
            variants={fadeUp}
            className="section-label"
            sx={{ mb: 2, display: "block", color: "#ff5600", letterSpacing: 3 }}
          >
            — Discover Your Taste
          </MotionTypography>

          <MotionTypography
            variants={fadeUp}
            sx={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 800,
              fontSize: { xs: "2.4rem", sm: "3rem", md: "4rem" },
              color: "#fff",
              lineHeight: 1.15,
              mb: 3,
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Good Food,<br />Great Memories.
          </MotionTypography>

          <MotionTypography
            variants={fadeUp}
            sx={{
              color: "rgba(255,255,255,0.82)",
              fontSize: { xs: "1rem", md: "1.15rem" },
              lineHeight: 1.8,
              mb: 4,
              maxWidth: 460,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            At Savoria, every plate tells a story — crafted from the finest
            ingredients, cooked with passion, and served with warmth.
          </MotionTypography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <MotionButton
              variants={fadeUp}
              variant="contained"
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "#ff5600",
                color: "#fff",
                px: 4.5,
                py: 1.6,
                textTransform: "none",
                borderRadius: "10px",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 6px 20px rgba(255,86,0,0.45)",
                "&:hover": { backgroundColor: "#e04a00", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
            >
              Reserve a Table
            </MotionButton>

            <MotionButton
              variants={fadeUp}
              variant="outlined"
              onClick={() => navigate("/menu")}
              sx={{
                border: "1.5px solid rgba(255,255,255,0.7)",
                color: "#fff",
                px: 4,
                py: 1.6,
                textTransform: "none",
                borderRadius: "10px",
                fontWeight: 600,
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                "&:hover": { borderColor: "#ff5600", color: "#ff5600", backgroundColor: "rgba(255,86,0,0.08)" },
                transition: "all 0.3s ease",
              }}
            >
              View Menu
            </MotionButton>
          </Box>
        </motion.div>
      </Box>

      {/* Scroll indicator */}
      <Box
        className="scroll-indicator"
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          color: "rgba(255,255,255,0.7)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          cursor: "pointer",
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
      >
        <Typography sx={{ fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase", color: "inherit", fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </Typography>
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>
    </Box>
  );
}
