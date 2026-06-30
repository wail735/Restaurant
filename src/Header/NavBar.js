import React, { useState, useEffect, useContext } from "react";
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
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import TranslateIcon from "@mui/icons-material/Translate";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ColorModeContext } from "../ThemeContext";
import "../App.css";

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const { toggleColorMode, mode } = useContext(ColorModeContext);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElBlog, setAnchorElBlog] = useState(null);
  const [anchorElLang, setAnchorElLang] = useState(null);
  const [openBlogMobile, setOpenBlogMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const pages = [
    { label: t("nav_home"), path: "/" },
    { label: t("nav_about"), path: "/about" },
    { label: t("nav_menu"), path: "/menu" },
    {
      label: t("nav_blog"),
      children: [
        { label: "Blog", path: "/blog" },
        { label: "Blog Details", path: "/blog-details" },
      ],
    },
    { label: t("nav_contact"), path: "/contact" },
  ];

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleOpenBlogMenu = (event) => setAnchorElBlog(event.currentTarget);
  const handleCloseBlogMenu = () => setAnchorElBlog(null);
  const handleOpenLangMenu = (event) => setAnchorElLang(event.currentTarget);
  const handleCloseLangMenu = () => setAnchorElLang(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleCloseLangMenu();
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? theme.palette.text.primary : "#ffffff";
  const bgColor = scrolled
    ? mode === "dark"
      ? "rgba(26,26,26,0.95)"
      : "rgba(255,255,255,0.97)"
    : "transparent";

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          backgroundColor: bgColor,
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
              alt="King Food Logo"
              style={{ height: "44px", objectFit: "contain", cursor: "pointer" }}
            />
            <Typography
              component={Link}
              to="/"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.35rem",
                color: textColor,
                textDecoration: "none",
                letterSpacing: "0.5px",
                transition: "color 0.35s ease",
                display: { xs: "none", sm: "block" },
              }}
            >
              {t("nav_brand")}
            </Typography>
          </Box>

          {/* Desktop menu */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
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
                        fontFamily: "'Poppins', sans-serif",
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
                        fontFamily: "'Poppins', sans-serif",
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
                      anchorOrigin={{ vertical: "bottom", horizontal: i18n.language === 'ar' ? "right" : "left" }}
                      transformOrigin={{ vertical: "top", horizontal: i18n.language === 'ar' ? "right" : "left" }}
                      PaperProps={{
                        sx: {
                          borderRadius: "10px",
                          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                          mt: 0.5,
                          backgroundColor: theme.palette.background.paper,
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.92rem",
                            "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                            "&:hover": { backgroundColor: mode === "dark" ? "#333" : "#fff5ed" },
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
                  px: 2.5,
                  py: 1,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.5px",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#ff5600", color: "#fff", borderColor: "#ff5600" },
                }}
              >
                {t("btn_reserve")}
              </Button>
            </Box>
          )}

          {/* Action Icons: Lang & DarkMode */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton sx={{ color: textColor }} onClick={toggleColorMode}>
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>

            <IconButton sx={{ color: textColor }} onClick={handleOpenLangMenu}>
              <TranslateIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElLang}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
              PaperProps={{ sx: { borderRadius: "8px", mt: 0.5, backgroundColor: theme.palette.background.paper } }}
            >
              <MenuItem onClick={() => changeLanguage("en")} sx={{ fontFamily: "'Poppins', sans-serif" }}>English</MenuItem>
              <MenuItem onClick={() => changeLanguage("fr")} sx={{ fontFamily: "'Poppins', sans-serif" }}>Français</MenuItem>
              <MenuItem onClick={() => changeLanguage("ar")} sx={{ fontFamily: "'Poppins', sans-serif" }}>العربية</MenuItem>
            </Menu>

            {/* Mobile hamburger */}
            {isMobile && (
              <IconButton
                size="large"
                aria-label="open menu"
                onClick={handleOpenNavMenu}
                sx={{ color: textColor, transition: "color 0.35s ease" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>

          {isMobile && (
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: i18n.language === 'ar' ? "left" : "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: i18n.language === 'ar' ? "left" : "right" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: { borderRadius: "12px", mt: 0.5, minWidth: 200, boxShadow: "0 8px 32px rgba(0,0,0,0.12)", backgroundColor: theme.palette.background.paper },
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
                        fontFamily: "'Poppins', sans-serif",
                        "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                        "&:hover": { backgroundColor: mode === "dark" ? "#333" : "#fff5ed" },
                      }}
                    >
                      <Typography textAlign="center">{page.label}</Typography>
                    </MenuItem>
                  );
                }

                return (
                  <Box key={page.label}>
                    <MenuItem onClick={() => setOpenBlogMobile(!openBlogMobile)}>
                      <Typography sx={{ flexGrow: 1, fontFamily: "'Poppins', sans-serif" }}>
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
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "0.875rem",
                            "&.active": { backgroundColor: "#ff5600", color: "#fff" },
                            "&:hover": { backgroundColor: mode === "dark" ? "#333" : "#fff5ed" },
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
                    fontFamily: "'Poppins', sans-serif",
                    "&:hover": { backgroundColor: "#ff5600", color: "#fff" },
                  }}
                >
                  {t("btn_reserve")}
                </Button>
              </MenuItem>
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
