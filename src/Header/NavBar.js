import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useTheme,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { NavLink } from "react-router-dom";

import "../App.css";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElBlog, setAnchorElBlog] = useState(null); 
  const [openBlogMobile, setOpenBlogMobile] = useState(false); 
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Menu", path: "/menu" },
    {
      label: "Blog",
      children: [
        { label: "Blog", path: "/blog" },
        { label: "Blog Details", path: "/blog-details" },
        
      ],
    },
    { label: "Contact", path: "/contact" },
  ];

  // mobile menu handlers
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // blog menu handlers (desktop)
  const handleOpenBlogMenu = (event) => setAnchorElBlog(event.currentTarget);
  const handleCloseBlogMenu = () => setAnchorElBlog(null);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: scrolled ? "#ffffff" : "transparent",
          color: scrolled ? "#1e1e1e" : "#1e1e1e",
          transition: "all 0.3s ease-in-out",
          px: 4,
          py: 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="./assets/images/Food.png"
              alt="Logo"
              style={{
                height: "50px",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Box>

          {/* Desktop menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
              {pages.map((page) => {
                if (!page.children) {
                  return (
                    <Button
                      key={page.label}
                      component={NavLink}
                      to={page.path}
                      sx={{
                        color: "#1e1e1e",
                        fontWeight: 400,
                        fontSize: "0.95rem",
                        textTransform: "none",
                        "&.active, &:hover": {
                          backgroundColor: "#ff5600",
                          color: "#fff",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  );
                }

                // Dropdown for Blog
                return (
                  <div key={page.label}>
                    <Button
                      onClick={handleOpenBlogMenu}
                      sx={{
                        color: "#1e1e1e",
                        textTransform: "none",
                        fontWeight: 400,
                        fontSize: "0.95rem",
                        "&:hover": {
                          backgroundColor: "#ff5600",
                          color: "#fff",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                    <Menu
                      anchorEl={anchorElBlog}
                      open={Boolean(anchorElBlog)}
                      onClose={handleCloseBlogMenu}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                      {page.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          component={NavLink}
                          to={child.path}
                          onClick={handleCloseBlogMenu}
                          sx={{
                            "&.active": {
                              backgroundColor: "#ff5600",
                              color: "#fff",
                            },
                          }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                );
              })}

              {/* Order Online */}
              <Button
                sx={{
                  textTransform: "capitalize",
                  border: "1px solid #ff5600",
                  color: "#464d65",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  px: 6,
                  py: 2.3,
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "1px",
                  transition: "all 0.4s linear",
                  "&:hover": {
                    backgroundColor: "#ff5600",
                    color: "#fff",
                  },
                  "&:focus": { outline: "none" },
                }}
              >
                Order Online
              </Button>
            </Box>
          )}

          {/* Mobile menu */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "#4c4c4c" }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => {
                  if (!page.children) {
                    return (
                      <MenuItem
                        key={page.label}
                        onClick={handleCloseNavMenu}
                        component={NavLink}
                        to={page.path}
                        sx={{
                          "&.active": {
                            backgroundColor: "#ff5600",
                            color: "#fff",
                          },
                        }}
                      >
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    );
                  }

                  // Blog expandable in mobile
                  return (
                    <Box key={page.label}>
                      <MenuItem
                        onClick={() => setOpenBlogMobile(!openBlogMobile)}
                      >
                        <Typography sx={{ flexGrow: 1 }}>
                          {page.label}
                        </Typography>
                        {openBlogMobile ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )}
                      </MenuItem>

                      <Collapse
                        in={openBlogMobile}
                        timeout="auto"
                        unmountOnExit
                      >
                        {page.children.map((child) => (
                          <MenuItem
                            key={child.label}
                            onClick={handleCloseNavMenu}
                            component={NavLink}
                            to={child.path}
                            sx={{
                              pl: 4,
                              "&.active": {
                                backgroundColor: "#ff5600",
                                color: "#fff",
                              },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        ))}
                      </Collapse>
                    </Box>
                  );
                })}

                {/* Order Online */}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    fullWidth
                    sx={{
                      textTransform: "none",
                      border: "1px solid #ff5600",
                      color: "#393e46",
                      px: 2,
                      py: 0.5,
                      borderRadius: "8px",
                      transition: "all 0.4s linear",
                      "&:hover": {
                        backgroundColor: "#ff5600",
                        color: "#fff",
                      },
                      "&:focus": { outline: "none" },
                    }}
                  >
                    Order Online
                  </Button>
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
