import { Typography, useTheme } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionCard = motion(Card);

export default function Blog() {
  const { t } = useTranslation();
  const theme = useTheme();

  const blogs = [
    {
      id: 1,
      image: "./assets/images/blog1.png.webp",
      date: "June 15, 2025",
      category: t('blog_cat1'),
      title: t('blog_title1'),
    },
    {
      id: 2,
      image: "./assets/images/blog2.png.webp",
      date: "May 28, 2025",
      category: t('blog_cat2'),
      title: t('blog_title2'),
    },
    {
      id: 3,
      image: "./assets/images/blog3.png.webp",
      date: "April 10, 2025",
      category: t('blog_cat3'),
      title: t('blog_title3'),
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-20 pb-16 px-4" style={{ backgroundColor: theme.palette.background.default }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: "center" }}
      >
        <Typography className="section-label" sx={{ mb: 1, display: "block" }}>
          {t('blog_label')}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.9rem", md: "2.6rem" },
            color: theme.palette.text.primary,
            mb: 6,
          }}
        >
          {t('blog_main_title')}
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
              bgcolor: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
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
                    textTransform: "uppercase",
                    letterSpacing: 1.2,
                    color: "#ff5600",
                    mb: 1.5,
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {blog.category}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    lineHeight: 1.4,
                    color: theme.palette.text.primary,
                    mb: 1.5,
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    fontFamily: "'Poppins', sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <span>{blog.date}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
          </MotionCard>
        ))}
      </div>
    </div>
  );
}
