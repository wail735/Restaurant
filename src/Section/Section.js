import BookingForm from "./BookingForm";
import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Section() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="w-full mt-20 relative"
      style={{ minHeight: isMobile ? "auto" : "520px" }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="./assets/images/section_bg04.png"
        alt="Book a table at Savoria"
        sx={{
          width: "100%",
          height: isMobile ? "auto" : "520px",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Dark overlay */}
      {!isMobile && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,8,5,0.62) 0%, rgba(10,8,5,0.72) 100%)",
          }}
        />
      )}

      {/* Text + Form */}
      <div
        className="flex flex-col items-center justify-center text-center p-6 z-10"
        style={{
          position: isMobile ? "relative" : "absolute",
          inset: isMobile ? "unset" : 0,
          backgroundColor: isMobile ? "#fff5ed" : "transparent",
          borderRadius: isMobile ? "12px" : "0px",
        }}
      >
        <p
          className="section-label"
          style={{ color: "#ff5600", marginBottom: 8 }}
        >
          About Our Restaurant
        </p>
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 800,
            color: isMobile ? "#1e1e1e" : "#fff",
            marginTop: 4,
            marginBottom: 24,
          }}
        >
          Book A Table
        </p>

        <div className="mt-2 w-full max-w-5xl">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
