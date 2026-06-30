import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function BlogCard() {
  const infos = [
    {
      id: 1,
      image: "/assets/images/single_blog_1.png",
      title: "Google inks pact for new 35-storey office",
      desreption:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
    {
      id: 2,
      image: "/assets/images/single_blog_2.png.webp",
      title: "Google inks pact for new 35-storey office",
      desreption:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
    {
      id: 3,
      image: "/assets/images/single_blog_3.png.webp",
      title: "Google inks pact for new 35-storey office",
      desreption:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
    {
      id: 4,
      image: "/assets/images/single_blog_4.png.webp",
      title: "Google inks pact for new 35-storey office",
      desreption:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
    {
      id: 5,
      image: "/assets/images/single_blog_5.png.webp",
      title: "Google inks pact for new 35-storey office",
      desreption:
        "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr", md: "1fr " },
        gap: 3,
      }}
    >
      {infos.map((info) => (
        
        <Card
          key={info.id}
          sx={{
            maxWidth: 600,
            width: "100%",
            borderRadius: 3,
            boxShadow: 4,
            overflow: "hidden",
          }}
        >
          {/* Image with date overlay */}
          <Box sx={{ position: "relative" }}>
            <CardMedia
              component="img"
              height="280"
              image={info.image}
              alt={info.title}
              sx={{ objectFit: "cover" }}
            />

            {/* Date badge */}
            <Box
              sx={{
                position: "absolute",
                bottom: -20,
                left: 20,
                bgcolor: "orange",
                color: "white",
                borderRadius: 1,
                textAlign: "center",
                px: 2,
                py: 1,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                15
              </Typography>
              <Typography variant="body2">Jan</Typography>
            </Box>
          </Box>

          {/* Content */}
          <CardContent sx={{ mt: 3 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {info.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              {info.desreption}
            </Typography>

            {/* Meta info */}
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", display: "flex", gap: 1 }}
            >
              Travel, Lifestyle • 03 Comments
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
