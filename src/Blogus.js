import { Container, Typography } from "@mui/material";
import BlogLayout from "./BlogLayout";

export default function Blogus() {
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
          Blog
        </Typography>
      </div>
      <div className="mt-20">
        <Container maxWidth="lg">
          <BlogLayout />
        </Container>
      </div>
    </div>
  );
}
