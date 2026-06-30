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

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenBlogMenu = (event) => setAnchorElBlog(event.currentTarget);
  const handleCloseBlogMenu = () => setAnchorElBlog(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "#1e1e1e" : "#ffffff";

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.35s ease",
          px: { xs: 1, md: 4 },
          py: 0.5,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo + Brand */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <img
              src="./assets/images/Food.png"
              alt="Savoria Logo"
              style={{ height: "44px", objectFit: "contain", cursor: "pointer" }}
            />
            <Typography
              component={NavLink}
              to="/"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: textColor,
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.35s ease",
                display: { xs: "none", sm: "block" },
              }}
            >
              Savoria
            </Typography>
          </Box>

          {/* Desktop menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
              {pages.map((page) => {
                if (!page.children) {
                  return (
                    <Button
                      key={page.label}
                      component={NavLink}
                      to={page.path}
                      sx={{
                        color: textColor,
                        fontWeight: 500,
                        fontSize: "0.92rem",
                        fontFamily: "'Inter', sans-serif",
                        textTransform: "none",
                        px: 1.5,
                        transition: "color 0.35s ease, background 0.3s ease",
                        "&.active, &:hover": {
                          backgroundColor: "#ff5600",
                          color: "#fff",
                          borderRadius: "6px",
                        },
                      }}
                    >
                      {page.label}
                    </Button>
                  );
                }

                return (
                  <div key={page.label}>
                    <Button
                      onClick={handleOpenBlogMenu}
                      endIcon={<ExpandMoreIcon />}
                      sx={{
                        color: textColor,
                        textTransform: "none",
                        fontWeight: 500,
                        fontSize: "0.92rem",
                        fontFamily: "'Inter', sans-serif",
                        px: 1.5,
                        transition: "color 0.35s ease",
                        "&:hover": { backgroundColor: "#ff5600", color: "#fff", borderRadius: "6px" },
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
                      PaperProps={{
                        sx: {
                          borderRadius: "10px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                          mt: 0.5,
                        },
                      }}
                    >
                      {page.children.map((child) => (
                        <MenuItem
                          key={child.label}
                          component={NavLink}
                          to={child.path}
                          onClick={handleCloseBlogMenu}
                          sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.92rem",
                            "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                            "&:hover": { backgroundColor: "#fff5ed" },
                          }}
                        >
                          {child.label}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                );
              })}

              <Button
                component={NavLink}
                to="/contact"
                sx={{
                  textTransform: "none",
                  border: "1.5px solid #ff5600",
                  color: scrolled ? "#ff5600" : "#fff",
                  borderRadius: "8px",
                  px: 3,
                  py: 1,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#ff5600", color: "#fff", borderColor: "#ff5600" },
                }}
              >
                Reserve a Table
              </Button>
            </Box>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <>
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleOpenNavMenu}
                sx={{ color: textColor, transition: "color 0.35s ease" }}
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
                PaperProps={{
                  sx: { borderRadius: "12px", mt: 0.5, minWidth: 200, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" },
                }}
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
                          fontFamily: "'Inter', sans-serif",
                          "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                          "&:hover": { backgroundColor: "#fff5ed" },
                        }}
                      >
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    );
                  }

                  return (
                    <Box key={page.label}>
                      <MenuItem onClick={() => setOpenBlogMobile(!openBlogMobile)}>
                        <Typography sx={{ flexGrow: 1, fontFamily: "'Inter', sans-serif" }}>
                          {page.label}
                        </Typography>
                        {openBlogMobile ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                      </MenuItem>
                      <Collapse in={openBlogMobile} timeout="auto" unmountOnExit>
                        {page.children.map((child) => (
                          <MenuItem
                            key={child.label}
                            onClick={handleCloseNavMenu}
                            component={NavLink}
                            to={child.path}
                            sx={{
                              pl: 4,
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "0.875rem",
                              "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        ))}
                      </Collapse>
                    </Box>
                  );
                })}

                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    fullWidth
                    component={NavLink}
                    to="/contact"
                    sx={{
                      textTransform: "none",
                      border: "1.5px solid #ff5600",
                      color: "#ff5600",
                      px: 2,
                      py: 0.75,
                      borderRadius: "8px",
                      fontWeight: 600,
                      fontFamily: "'Inter', sans-serif",
                      "&:hover": { backgroundColor: "#ff5600", color: "#fff" },
                    }}
                  >
                    Reserve a Table
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
