import { Box, Container, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import Instagramme from "./instagramme";

const navItems = ["Home", "Events", "Testimonial", "Categories", "Contacts"];
const usefulLinks = ["Registration", "Login", "Policy", "Terms & Conditions"];
const socialLinks = [
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-instagram", url: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: "url('./assets/images/section_bg02.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "40px 0",
        color: "#fff",
        marginTop:30,
      }}
    >
      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "flex-start" }}
            gap={{ xs: 4, md: 8 }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <img
                alt="Logo"
                src="./assets/images/logo2_footer.png.webp"
                style={{
                  maxWidth: "150px",
                  width: "100%",
                }}
              />
            </Box>

            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 6, sm: 10, md: 14 }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  Navigation
                </Typography>
                {navItems.map((item) => (
                  <Typography
                    key={item}
                    component={Link}
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/ /g, "-")}`
                    }
                    sx={{
                      color: "#aaa",
                      textDecoration: "none",
                      display: "block",
                      margin: "4px 0",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": { color: "#ff5700" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              {/* Useful Links */}
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  Useful Links
                </Typography>
                {usefulLinks.map((link) => (
                  <Typography
                    key={link}
                    component={MuiLink}
                    href="#"
                    sx={{
                      color: "#aaa",
                      textDecoration: "none",
                      display: "block",
                      margin: "4px 0",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": { color: "#ff5700" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>

              {/* Instagram Feed */}
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                  }}
                >
                  Instagram Food
                </Typography>
                <Instagramme />
              </Box>
            </Box>
          </Box>

          <Box
            mt={5}
            pt={3}
            borderTop="1px solid rgba(255, 255, 255, 0.1)"
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{ color: "#aaa", fontSize: "14px", textAlign: "center" }}
          >
            <Typography sx={{ mb: { xs: 2, sm: 0 } }}>
              Copyright ©2025 All rights reserved | This template is made with{" "}
              <span style={{ color: "#ff5700" }}>❤️</span> by{" "}
              <MuiLink
                href="https://colorlib.com"
                target="_blank"
                rel="noopener"
                sx={{
                  color: "#ff5700",
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Colorlib
              </MuiLink>
            </Typography>

            <Box
              display="flex"
              gap={2}
              sx={{
                fontSize: { xs: "20px", md: "18px" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "14px" }}>Follow Us :</span>
              {socialLinks.map((social, index) => (
                <MuiLink
                  key={index}
                  href={social.url}
                  sx={{
                    color: "#fff",
                    "&:hover": { color: "#ff5700" },
                  }}
                >
                  <i className={social.icon}></i>
                </MuiLink>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
