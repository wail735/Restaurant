import { Typography } from "@mui/material";
import About from "./About/About";
import Section from "./Section/Section";
import Discover from "./Discover/Discover";
import Aboutt from "./About/Aboutt";
import Service from "./Services/Service";

export default function Aboutus() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <div className="relative w-full overflow-hidden" style={{ height: 240 }}>
        <img
          alt="about"
          src="./assets/images/hero2.png"
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
          <p className="section-label" style={{ color: "#ff5600", marginBottom: 8 }}>Our Story</p>
          <Typography
            component="h1"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              color: "#fff",
              lineHeight: 1.15,
            }}
          >
            About Us
          </Typography>
        </div>
      </div>
      <About/>
      <Section/>
      <Discover/>
      <Aboutt/>
      <Service/>
    </div>
  );
}

