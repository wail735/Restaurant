import { Container, Typography, Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
};

export default function Discover() {
  const { t } = useTranslation();
  const theme = useTheme();
  
  const features = [
    {
      id: 1,
      icon: "./assets/images/cooking.png",
      title: t('feat1_title'),
      description: t('feat1_desc'),
    },
    {
      id: 2,
      icon: "./assets/images/stir-fry.png",
      title: t('feat2_title'),
      description: t('feat2_desc'),
    },
    {
      id: 3,
      icon: "./assets/images/chef.png",
      title: t('feat3_title'),
      description: t('feat3_desc'),
    },
    {
      id: 4,
      icon: "./assets/images/cooking.png",
      title: t('feat4_title'),
      description: t('feat4_desc'),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        px: 2,
        py: { xs: 8, md: 4 },
        bgcolor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* Text + features */}
          <Box sx={{ flex: 1 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Typography
                custom={0}
                component={motion.p}
                variants={fadeUp}
                className="section-label"
                sx={{ mb: 2 }}
              >
                {t('hero_label')}
              </Typography>

              <Typography
                custom={1}
                component={motion.h2}
                variants={fadeUp}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: { xs: "2rem", md: "2.8rem" },
                  color: theme.palette.text.primary,
                  lineHeight: 1.2,
                  mb: 2,
                  whiteSpace: "pre-line"
                }}
              >
                {t('discover_title')}
              </Typography>

              <Typography
                custom={2}
                component={motion.p}
                variants={fadeUp}
                sx={{
                  maxWidth: "520px",
                  color: theme.palette.text.secondary,
                  mb: 5,
                  lineHeight: 1.85,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1rem",
                }}
              >
                {t('discover_desc')}
              </Typography>

              {/* Feature grid */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                  gap: 3,
                }}
              >
                {features.map((feat, i) => (
                  <MotionBox
                    key={feat.id}
                    custom={i + 3}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      p: 2,
                      borderRadius: "12px",
                      transition: "background 0.3s ease",
                      "&:hover": { backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : "#fff5ed" },
                    }}
                  >
                    <img
                      src={feat.icon}
                      alt={feat.title}
                      loading="lazy"
                      style={{ width: "42px", height: "42px", objectFit: "contain", flexShrink: 0 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          mb: 0.4,
                          color: theme.palette.text.primary,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {feat.title}
                      </Typography>
                      <Typography
                        sx={{ color: theme.palette.text.secondary, fontSize: "0.875rem", lineHeight: 1.6, fontFamily: "'Poppins', sans-serif" }}
                      >
                        {feat.description}
                      </Typography>
                    </Box>
                  </MotionBox>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Image */}
          <MotionBox
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
          >
            <Box
              component="img"
              src="./assets/images/chef.jpg"
              alt="Chef preparing a dish"
              loading="lazy"
              sx={{
                width: { xs: "100%", md: "440px" },
                maxWidth: "100%",
                height: "auto",
                borderRadius: "16px",
                boxShadow: "0 12px 40px rgba(0,0,0,0.14)",
                transition: "transform 0.4s ease",
                "&:hover": { transform: "scale(1.03)" },
              }}
            />
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
