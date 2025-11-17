import { Typography } from "@mui/material";
import About from "./About/About";
import Section from "./Section/Section";
import Discover from "./Discover/Discover";
import Aboutt from "./About/Aboutt";
import Service from "./Services/Service";

export default function Aboutus() {
  return (
    <div>
      <div className="relative w-full">
        <img
          alt="about"
          src="./assets/images/hero2.png"
          className="w-full h-auto block"
        />
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "30%", md: "40%" }, 
            left: { xs: "40%", md: "20%" }, 
            transform: "translateX(-50%)",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" }, 
            fontWeight: 500,
          }}
        >
          About Us
        </Typography>
      </div>
      <About/>
      <Section/>
      <Discover/>
      <Aboutt/>
      <Service/>
    </div>
  );
}
