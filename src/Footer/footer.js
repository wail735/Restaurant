import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Instagramme from "./instagramme";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Menu", path: "/menu" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const usefulLinks = [
  { label: "Reserve a Table", path: "/contact" },
  { label: "Our Menu", path: "/menu" },
  { label: "Blog", path: "/blog" },
  { label: "About Us", path: "/about" },
];

const socialLinks = [
  { icon: "fab fa-twitter", url: "#", label: "Twitter" },
  { icon: "fab fa-facebook-f", url: "#", label: "Facebook" },
  { icon: "fab fa-instagram", url: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('./assets/images/section_bg02.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 0 0",
        color: "#fff",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          background: "linear-gradient(to bottom, rgba(10,8,5,0.82) 0%, rgba(10,8,5,0.95) 100%)",
        }}
      >
        <Box sx={{ py: 6 }}>
          <Container maxWidth="lg">
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems={{ xs: "center", md: "flex-start" }}
              gap={{ xs: 6, md: 8 }}
            >
              {/* Brand */}
              <Box sx={{ textAlign: { xs: "center", md: "left" }, maxWidth: 260 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2, justifyContent: { xs: "center", md: "flex-start" } }}>
                  <img
                    alt="Savoria Logo"
                    src="./assets/images/logo2_footer.png.webp"
                    style={{ maxWidth: "48px", width: "100%" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      color: "#fff",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Savoria
                  </Typography>
                </Box>
                <Typography sx={{ color: "#aaa", fontSize: "0.875rem", lineHeight: 1.75, fontFamily: "'Inter', sans-serif" }}>
                  Fine dining crafted with passion. Every plate tells a story of fresh ingredients, expert technique, and a love for good food.
                </Typography>

                {/* Social icons */}
                <Box display="flex" gap={1.5} mt={2.5} sx={{ justifyContent: { xs: "center", md: "flex-start" } }}>
                  {socialLinks.map((s) => (
                    <MuiLink
                      key={s.label}
                      href={s.url}
                      aria-label={s.label}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: "0.85rem",
                        transition: "all 0.3s ease",
                        "&:hover": { borderColor: "#ff5600", color: "#ff5600", backgroundColor: "rgba(255,86,0,0.1)" },
                      }}
                    >
                      <i className={s.icon} />
                    </MuiLink>
                  ))}
                </Box>
              </Box>

              {/* Nav links */}
              <Box
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                gap={{ xs: 6, sm: 10, md: 12 }}
                textAlign={{ xs: "center", sm: "left" }}
                flex={1}
              >
                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", mb: 2 }}
                  >
                    Navigation
                  </Typography>
                  {navItems.map((item) => (
                    <Typography
                      key={item.label}
                      component={Link}
                      to={item.path}
                      sx={{
                        color: "#aaa",
                        textDecoration: "none",
                        display: "block",
                        mb: 0.75,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                        "&:hover": { color: "#ff5600" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", mb: 2 }}
                  >
                    Quick Links
                  </Typography>
                  {usefulLinks.map((link) => (
                    <Typography
                      key={link.label}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: "#aaa",
                        textDecoration: "none",
                        display: "block",
                        mb: 0.75,
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                        "&:hover": { color: "#ff5600" },
                      }}
                    >
                      {link.label}
                    </Typography>
                  ))}
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.05rem", mb: 2 }}
                  >
                    Instagram
                  </Typography>
                  <Instagramme />
                </Box>
              </Box>
            </Box>

            {/* Copyright */}
            <Box
              mt={5}
              pt={3}
              borderTop="1px solid rgba(255,255,255,0.08)"
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              sx={{ color: "#777", fontSize: "0.85rem", textAlign: "center", pb: 3 }}
            >
              <Typography sx={{ mb: { xs: 1.5, sm: 0 }, fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                &copy; {new Date().getFullYear()} Savoria Restaurant. All rights reserved.
              </Typography>
              <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem" }}>
                Crafted with <span style={{ color: "#ff5600" }}>❤</span> for great dining experiences.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>
    </footer>
  );
}
