import { Box, Typography, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

export default function Properties({ activeCategory }) {
  const { t } = useTranslation();
  const theme = useTheme();

  const data = {
    special: [
      { id: 1, image: "/assets/images/special-01.jpg" },
      { id: 2, image: "/assets/images/Special-02.jpg" },
      { id: 3, image: "/assets/images/special-03.jpg" },
      { id: 4, image: "/assets/images/special-04.jpg" },
    ],
    lunch: [
      { id: 1, image: "/assets/images/lunch-01.jpg" },
      { id: 2, image: "/assets/images/lunch-02.webp" },
      { id: 3, image: "/assets/images/lunch-03.jpg" },
      { id: 4, image: "/assets/images/lunch-04.webp" },
    ],
    breakfast: [
      { id: 1, image: "/assets/images/break-01.webp" },
      { id: 2, image: "/assets/images/break-02.jpg" },
      { id: 3, image: "/assets/images/break-03.jpeg" },
      { id: 4, image: "/assets/images/break-04.jpeg" },
    ],
    dinner: [
      { id: 1, image: "/assets/images/dinner-01.webp" },
      { id: 2, image: "/assets/images/dinner-02.jpeg" },
      { id: 3, image: "/assets/images/dinner-03.jpg" },
      { id: 4, image: "/assets/images/dinner-04.webp" },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const renderImage = (item, index) => (
    <Box
      key={index}
      sx={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", cursor: "pointer" }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <MotionBox
        component="img"
        src={item.image}
        alt={`food-${index + 1}`}
        sx={{ width: "100%", height: "100%", objectFit: "cover", boxShadow: 3, transition: "transform 0.3s ease-in-out" }}
        whileHover={{ scale: 1.05 }}
      />

      <AnimatePresence>
        {hoveredIndex === index && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "absolute", inset: 0,
              background: "rgba(0,0,0,0.6)",
              color: "#fff", display: "flex",
              flexDirection: "column", justifyContent: "center",
              alignItems: "center", textAlign: "center", padding: "16px",
            }}
          >
            <Typography sx={{ color: "#ff5600", fontSize: "1.6rem", fontWeight: 800, fontFamily: "'Poppins', sans-serif", mb: 0.5 }}>25$</Typography>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: 700, fontFamily: "'Poppins', sans-serif", mb: 0.5 }}>{t('food_title')}</Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)", fontFamily: "'Poppins', sans-serif", mb: 1.5 }}>{t('food_desc')}</Typography>
            <button
              style={{
                background: "#ff5600", color: "#fff", border: "none",
                padding: "10px 24px", borderRadius: "8px", cursor: "pointer",
                fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem",
              }}
              onMouseOver={(e) => e.target.style.background = "#e04a00"}
              onMouseOut={(e) => e.target.style.background = "#ff5600"}
            >
              {t('btn_order')}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );

  return (
    <Box sx={{ py: 1, bgcolor: theme.palette.background.default }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 1 }}>
            <Box sx={{ width: { xs: "100%", md: "33.33%" }, height: { xs: 200, md: 400 } }}>
              {renderImage(data[activeCategory][0], 0)}
            </Box>
            <Box sx={{ width: { xs: "100%", md: "33.33%" }, height: { xs: 200, md: 400 } }}>
              {renderImage(data[activeCategory][1], 1)}
            </Box>
            <Box sx={{ width: { xs: "100%", md: "33.33%" }, display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ height: { xs: 200, md: 195 } }}>{renderImage(data[activeCategory][2], 2)}</Box>
              <Box sx={{ height: { xs: 200, md: 195 } }}>{renderImage(data[activeCategory][3], 3)}</Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
