import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        background: "linear-gradient(135deg, #fffbf7 0%, #fff5ed 100%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: { xs: "6rem", md: "10rem" },
            fontWeight: 800,
            color: "#ff5600",
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            mb: 2,
            color: "#1e1e1e",
          }}
        >
          Page Not Found
        </Typography>
        <Typography sx={{ color: "#6b7280", mb: 4, maxWidth: 400 }}>
          Looks like this dish isn't on our menu. Let us take you back to the table.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/")}
          sx={{
            bgcolor: "#ff5600",
            color: "#fff",
            px: 5,
            py: 1.5,
            borderRadius: 2,
            fontWeight: 600,
            fontSize: "1rem",
            textTransform: "none",
            "&:hover": { bgcolor: "#e04a00" },
          }}
        >
          Back to Home
        </Button>
      </motion.div>
    </Box>
  );
}

