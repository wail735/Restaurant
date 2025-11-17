import { Typography } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: "./assets/images/blog1.png.webp",
      date: "23 Dec, 2020",
      title: "Addiction When Food Plate Becomes",
    },
    {
      id: 2,
      image: "./assets/images/blog2.png.webp",
      date: "23 Dec, 2020",
      title: "Addiction When Food Plate Becomes",
    },
    {
      id: 3,
      image: "./assets/images/blog3.png.webp",
      date: "23 Dec, 2020",
      title: "Addiction When Food Plate Becomes",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-20">
      <Typography variant="h6" style={{ color: "#ff5631" }}>
        Our New Blog News
      </Typography>
      <Typography variant="h3" style={{ color: "#212025" }}>
        Our Recnet News
      </Typography>
      <div className="flex gap-10 flex-col xs:flex-row md:flex-row">
        {blogs.map((blog) => (
          <Card
            sx={{
              maxWidth: 345,
              display: "flex",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.03)",
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={blog.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.date}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {blog.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}
