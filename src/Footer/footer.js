import React from "react";
import { Box, Container, Typography, IconButton, Grid, Divider, useTheme } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.mode === 'dark' ? '#0a0a0a' : "#111111",
        color: "#ffffff",
        pt: { xs: 8, md: 10 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 4 }} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Box sx={{ pr: { md: 4 } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <img
                  src="./assets/images/Food.png"
                  alt="King Food Logo"
                  loading="lazy"
                  style={{ height: "48px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
                <Typography
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    letterSpacing: "0.5px",
                    color: "#fff"
                  }}
                >
                  {t('nav_brand')}
                </Typography>
              </Box>
              <Typography sx={{ color: "#aaa", fontSize: "0.875rem", lineHeight: 1.75, fontFamily: "'Poppins', sans-serif" }}>
                {t('footer_desc')}
              </Typography>
              <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
                {[FacebookIcon, TwitterIcon, InstagramIcon, YouTubeIcon].map((Icon, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "#aaa",
                      bgcolor: "rgba(255,255,255,0.05)",
                      "&:hover": { bgcolor: "#ff5600", color: "#fff", transform: "translateY(-3px)" },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4} md={2}>
            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem", mb: 2 }}>
              {t('quick_links')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.2 }}>
              {["nav_home", "nav_about", "nav_menu", "nav_contact"].map((link) => (
                <Typography
                  key={link}
                  component={Link}
                  to={link === 'nav_home' ? '/' : `/${link.split('_')[1]}`}
                  sx={{
                    color: "#aaa",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "'Poppins', sans-serif",
                    "&:hover": { color: "#ff5600", paddingLeft: "4px" },
                    transition: "all 0.25s ease",
                  }}
                >
                  {t(link)}
                </Typography>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4} md={3}>
            <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1.05rem", mb: 2 }}>
              {t('contact_info')}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Typography sx={{ color: "#aaa", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}>
                <strong style={{ color: "#fff" }}>{t('address_lbl')}:</strong><br />12 Rue des Oliviers, Blida
              </Typography>
              <Typography sx={{ color: "#aaa", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}>
                <strong style={{ color: "#fff" }}>{t('phone_lbl')}:</strong><br />+213 25 30 40 50
              </Typography>
              <Typography sx={{ color: "#aaa", fontSize: "0.9rem", fontFamily: "'Poppins', sans-serif" }}>
                <strong style={{ color: "#fff" }}>{t('email_lbl')}:</strong><br />hello@kingfood.dz
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mt: 6, mb: 3 }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", color: "#777" }}>
          <Typography sx={{ mb: { xs: 1.5, sm: 0 }, fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem" }}>
            Ã‚Â© {new Date().getFullYear()} {t('nav_brand')}. {t('rights')}.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
