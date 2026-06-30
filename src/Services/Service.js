import { Container, Typography, Box, Grid, Card, CardContent, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Service() {
  const { t } = useTranslation();
  const theme = useTheme();

  const services = [
    { id: 1, title: t('srv1_title'), desc: t('srv1_desc'), icon: <LocalDiningIcon sx={{ fontSize: 40 }} /> },
    { id: 2, title: t('srv2_title'), desc: t('srv2_desc'), icon: <TakeoutDiningIcon sx={{ fontSize: 40 }} /> },
    { id: 3, title: t('srv3_title'), desc: t('srv3_desc'), icon: <EventSeatIcon sx={{ fontSize: 40 }} /> },
    { id: 4, title: t('srv4_title'), desc: t('srv4_desc'), icon: <LocalBarIcon sx={{ fontSize: 40 }} /> },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography className="section-label" sx={{ mb: 1, display: "inline-block" }}>
            {t('srv_label')}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: theme.palette.text.primary,
            }}
          >
            {t('srv_main_title')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((srv, i) => (
            <Grid item xs={12} sm={6} md={3} key={srv.id}>
              <motion.div
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ height: "100%" }}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    p: 3,
                    borderRadius: "16px",
                    bgcolor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.mode === 'dark' ? '#333' : 'rgba(0,0,0,0.04)'}`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 12px 30px rgba(255,86,0,0.12)",
                      "& .icon-wrapper": { bgcolor: "#ff5600", color: "#fff" },
                    },
                  }}
                >
                  <Box
                    className="icon-wrapper"
                    sx={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,86,0,0.15)' : "#fff5ed",
                      color: "#ff5600",
                      mb: 2.5,
                      transition: "all 0.3s ease",
                    }}
                  >
                    {srv.icon}
                  </Box>
                  <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {srv.title}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.text.secondary, fontSize: "0.92rem", lineHeight: 1.75, fontFamily: "'Poppins', sans-serif" }}
                    >
                      {srv.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
