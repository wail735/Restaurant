import { Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

const blogs = [
  {
    id: 1,
    image: "./assets/images/blog1.png.webp",
    date: "June 15, 2025",
    category: "Chef Secrets",
    title: "The Art of Perfect Pasta: Tips from Our Head Chef",
  },
  {
    id: 2,
    image: "./assets/images/blog2.png.webp",
    date: "May 28, 2025",
    category: "Nutrition",
    title: "Why Seasonal Eating Transforms Every Meal You Make",
  },
  {
    id: 3,
    image: "./assets/images/blog3.png.webp",
    date: "April 10, 2025",
    category: "Culture",
    title: "Mediterranean Flavours: A Journey Through Tradition",
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-20 pb-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <Typography className="section-label" sx={{ mb: 1, display: "block" }}>
          Our Latest Articles
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.9rem", md: "2.6rem" },
            color: "#1e1e1e",
            mb: 6,
          }}
        >
          From the Savoria Kitchen
        </Typography>
      </motion.div>

      <div className="flex gap-8 flex-col md:flex-row flex-wrap justify-center">
        {blogs.map((blog, i) => (
          <MotionCard
            key={blog.id}
            component={Link}
            to="/blog-details"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.13 }}
            sx={{
              maxWidth: 340,
              width: "100%",
              borderRadius: "14px",
              overflow: "hidden",
              textDecoration: "none",
              border: "1px solid rgba(0,0,0,0.07)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
              transition: "all 0.35s ease",
              "&:hover": {
                boxShadow: "0 12px 36px rgba(255,86,0,0.15)",
                transform: "translateY(-6px)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={blog.image}
                alt={blog.title}
                loading="lazy"
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#ff5600",
                    mb: 0.75,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {blog.category} &nbsp;Â·&nbsp; {blog.date}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#1e1e1e",
                    lineHeight: 1.4,
                  }}
                >
                  {blog.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}

