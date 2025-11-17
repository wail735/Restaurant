import BookingForm from "./BookingForm";
import { Box } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Section() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      className="w-full mt-20 relative"
      style={{
        minHeight: isMobile ? "auto" : "500px",
      }}
    >
      {/* Hero Image */}
      <Box
        component="img"
        src="./assets/images/section_bg04.png"
        alt="Main"
        sx={{
          width: "100%",
          height: isMobile ? "auto" : "500px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      {/* Text + Form */}
      <div
        className="flex flex-col items-center justify-center text-center p-4 z-10"
        style={{
          position: isMobile ? "relative" : "absolute",
          inset: isMobile ? "unset" : 0,
          backgroundColor: isMobile ? "rgba(255,255,255,0.9)" : "transparent",
          borderRadius: isMobile ? "8px" : "0px",
        }}
      >
        <h5
          className="font-bold"
          style={{
            color: "#fd5600",
            fontSize: "clamp(1rem, 2vw, 1.5rem)",
          }}
        >
          About Our Restaurant
        </h5>
        <p
          className="mt-2 text-gray-700"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: "bold",
          }}
        >
          Book A Table
        </p>

        <div className="mt-6 w-full max-w-4xl">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
