import { Box } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

export default function Properties({ activeCategory }) {
  const data = {
    Special: [
      { id: 1, image: "/assets/images/special-01.jpg" },
      { id: 2, image: "/assets/images/Special-02.jpg" },
      { id: 3, image: "/assets/images/special-03.jpg" },
      { id: 4, image: "/assets/images/special-04.jpg" },
    ],
    Lunch: [
      { id: 1, image: "/assets/images/lunch-01.jpg" },
      { id: 2, image: "/assets/images/lunch-02.webp" },
      { id: 3, image: "/assets/images/lunch-03.jpg" },
      { id: 4, image: "/assets/images/lunch-04.webp" },
    ],
    Breakfast: [
      { id: 1, image: "/assets/images/break-01.webp" },
      { id: 2, image: "/assets/images/break-02.jpg" },
      { id: 3, image: "/assets/images/break-03.jpeg" },
      { id: 4, image: "/assets/images/break-04.jpeg" },
    ],
    Dinner: [
      { id: 1, image: "/assets/images/dinner-01.webp" },
      { id: 2, image: "/assets/images/dinner-02.jpeg" },
      { id: 3, image: "/assets/images/dinner-03.jpg" },
      { id: 4, image: "/assets/images/dinner-04.webp" },
    ],
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderImage = (item, index) => (
    <Box
      key={index}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <MotionBox
        component="img"
        src={item.image}
        alt={`img${index + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          boxShadow: 3,
          transition: "transform 0.3s ease-in-out",
        }}
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
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <h2 style={{ color: "#ff5600" , fontSize:"25px"}}>25$</h2>
            <p style={{fontSize:"42px"}}>Delicious Food </p>
            <p style={{fontSize:"12px"}}>Ut enim ad minim veniam quis nostr.</p>
            <button className="bg-orange-600 p-4 m-2 rounded-md hover:bg-orange-400">
              Order Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );

  return (
    <Box sx={{ py: 1 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 1,
            }}
          >
            {/* Image 1 */}
            <Box
              sx={{
                width: { xs: "100%", md: "33.33%" },
                height: { xs: 200, md: 400 },
              }}
            >
              {renderImage(data[activeCategory][0], 0)}
            </Box>

            {/* Image 2 */}
            <Box
              sx={{
                width: { xs: "100%", md: "33.33%" },
                height: { xs: 200, md: 400 },
              }}
            >
              {renderImage(data[activeCategory][1], 1)}
            </Box>

            {/* Column with image 3 and 4 */}
            <Box
              sx={{
                width: { xs: "100%", md: "33.33%" },
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Box sx={{ height: { xs: 200, md: 195 } }}>
                {renderImage(data[activeCategory][2], 2)}
              </Box>
              <Box sx={{ height: { xs: 200, md: 195 } }}>
                {renderImage(data[activeCategory][3], 3)}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
