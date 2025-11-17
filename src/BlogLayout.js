import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import BlogCard from "./blogcard";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";

// Données statiques
const categories = [
  { name: "Restaurant food", count: 37 },
  { name: "Travel news", count: 10 },
  { name: "Modern technology", count: 3 },
  { name: "Product", count: 11 },
  { name: "Inspiration", count: 21 },
  { name: "Health Care", count: 9 },
];

const posts = [
  {
    image: "./assets/images/post_1.png.webp",
    title: "From life was you fish...",
    date: "January 12, 2019",
  },
  {
    image: "./assets/images/post_2.png.webp",
    title: "The Amazing Hubble",
    date: "02 Hours ago",
  },
  {
    image: "./assets/images/post_3.png.webp",
    title: "Astronomy Or Astrology",
    date: "03 Hours ago",
  },
  {
    image: "./assets/images/post_4.png.webp",
    title: "Asteroids telescope",
    date: "01 Hours ago",
  },
];

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
];

// Composant pour section sidebar
function SidebarSection({ title, children }) {
  return (
    <Paper sx={{ p: 2, mb: 3, backgroundColor: "#fbf9ff" }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

export default function BlogLayout() {
  const [emailState, setEmailState] = useState({ email: "" });
  const [searchQuery, setSearchQuery] = useState(""); 

  // ✅ تصفية المقالات حسب الكلمة
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        {/* Colonne principale */}
        <Grid item xs={12} md={8}>
          <BlogCard />
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          {/* Search */}
          <SidebarSection title="Search">
            <TextField
              fullWidth
              placeholder="Search Keyword"
              size="small"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              color="warning"
              sx={{ mt: 2, width: "100%", border: "1px solid" }}
              onClick={() => console.log("Recherche:", searchQuery)}
            >
              SEARCH
            </Button>
          </SidebarSection>

          {/* Categories */}
          <SidebarSection title="Categories">
            <List>
              {categories.map((cat) => (
                <React.Fragment key={cat.name}>
                  <ListItem
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <ListItemText primary={cat.name} />
                    <Typography variant="body2" color="text.secondary">
                      ({cat.count})
                    </Typography>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </SidebarSection>

          {/* Recent Posts */}
          <SidebarSection title="Recent Posts">
            <List>
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <React.Fragment key={post.title}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          src={post.image}
                          alt={post.title}
                          variant="square"
                          sx={{ width: 60, height: 60, mr: 2 }}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={post.title}
                        secondary={post.date}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ p: 2 }}
                >
                  No posts found.
                </Typography>
              )}
            </List>
          </SidebarSection>

          {/* Instagram Feeds */}
          <SidebarSection title="Instagram Feeds">
            <List>
              <ImageList sx={{ width: 300, height: 300 }} cols={3}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </List>
          </SidebarSection>

          {/* Newsletter */}
          <SidebarSection title="NewsLetter">
            <List>
              <TextField
                fullWidth
                placeholder="Enter your email"
                size="small"
                variant="outlined"
                value={emailState.email || ""}
                onChange={(event) => {
                  setEmailState({ ...emailState, email: event.target.value });
                }}
              />
              <Button
                color="warning"
                sx={{ mt: 2, width: "100%", border: "1px solid" }}
              >
                SUBSCRIBE
              </Button>
            </List>
          </SidebarSection>
        </Grid>
      </Grid>
    </Box>
  );
}
