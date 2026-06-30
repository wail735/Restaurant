import { Typography, TextField, Button, Box, Alert, Collapse, useTheme } from "@mui/material";
import { Home, Phone, Email } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Contact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const infoItems = [
    {
      icon: <Home sx={{ color: "#ff5600", fontSize: 28 }} />,
      label: t('contact_visit'),
      line1: "12 Rue des Oliviers, Blida",
      line2: "Algerie, 09000",
    },
    {
      icon: <Phone sx={{ color: "#ff5600", fontSize: 28 }} />,
      label: t('contact_call'),
      line1: "+213 25 30 40 50",
      line2: t('contact_hours'),
    },
    {
      icon: <Email sx={{ color: "#ff5600", fontSize: 28 }} />,
      label: t('contact_email_lbl'),
      line1: "hello@kingfood.dz",
      line2: t('contact_reply'),
    },
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = t('err_name');
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = t('err_email');
    if (!form.subject.trim()) e.subject = t('err_subject');
    if (!form.message.trim()) e.message = t('err_message');
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div style={{ backgroundColor: theme.palette.background.default, minHeight: "100vh" }}>
      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: "260px" }}>
        <img
          alt="Contact King Food"
          src="./assets/images/section_bg02.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ color: "#ff5600", marginBottom: 8 }}>{t('contact_hero_label')}</p>
            <h1
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#fff",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              {t('contact_hero_title')}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Info cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          gap: 3,
          px: { xs: 3, md: 8 },
          py: 6,
          bgcolor: theme.palette.background.default,
        }}
      >
        {infoItems.map((item, i) => (
          <motion.div
            key={item.label}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ flex: 1 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                p: 3,
                borderRadius: "14px",
                bgcolor: theme.palette.background.paper,
                boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                border: `1px solid ${theme.palette.divider}`,
                transition: "box-shadow 0.3s ease",
                "&:hover": { boxShadow: "0 8px 28px rgba(255,86,0,0.12)" },
              }}
            >
              <Box sx={{ mt: 0.3 }}>{item.icon}</Box>
              <Box>
                <Typography sx={{ fontWeight: 700, fontFamily: "'Poppins', sans-serif", fontSize: "1rem", mb: 0.3, color: theme.palette.text.primary }}>
                  {item.label}
                </Typography>
                <Typography sx={{ color: theme.palette.text.primary, fontFamily: "'Poppins', sans-serif", fontSize: "0.9rem" }}>
                  {item.line1}
                </Typography>
                <Typography sx={{ color: theme.palette.text.secondary, fontFamily: "'Poppins', sans-serif", fontSize: "0.85rem" }}>
                  {item.line2}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Map + Form */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8 px-6 md:px-12 pb-16">
        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, width: "100%" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51328.26146500116!2d2.758991357737963!3d36.48132138224532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c66865a4cd1%3A0xccfcf9c073646dfe!2sBlida!5e0!3m2!1sfr!2sdz!4v1757093931658!5m2!1sfr!2sdz"
            style={{ width: "100%", height: "420px", border: 0, borderRadius: "14px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="King Food Restaurant Location"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1, width: "100%" }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "1.7rem",
              mb: 3,
              color: theme.palette.text.primary,
            }}
          >
            {t('contact_form_title')}
          </Typography>

          <Collapse in={submitted}>
            <Alert
              severity="success"
              sx={{
                mb: 3,
                borderRadius: "12px",
                bgcolor: theme.palette.mode === 'dark' ? "rgba(255,86,0,0.1)" : "#fff5ed",
                border: "1px solid #ff5600",
                "& .MuiAlert-icon": { color: "#ff5600" },
                fontFamily: "'Poppins', sans-serif",
                color: theme.palette.text.primary,
              }}
            >
              {t('contact_success')}
            </Alert>
          </Collapse>

          <Box component="form" onSubmit={handleSubmit} className="flex flex-col gap-4">
            <TextField
              label={t('contact_name')}
              variant="outlined"
              fullWidth
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              error={!!errors.name}
              helperText={errors.name}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
            <TextField
              label={t('contact_email_field')}
              type="email"
              variant="outlined"
              fullWidth
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              error={!!errors.email}
              helperText={errors.email}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
            <TextField
              label={t('contact_subject')}
              variant="outlined"
              fullWidth
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              error={!!errors.subject}
              helperText={errors.subject}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
            <TextField
              label={t('contact_message')}
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              error={!!errors.message}
              helperText={errors.message}
              sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 1,
                bgcolor: "#ff5600",
                "&:hover": { bgcolor: "#e04a00" },
                borderRadius: "10px",
                px: 5,
                py: 1.5,
                fontWeight: 700,
                fontSize: "1rem",
                textTransform: "none",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 6px 20px rgba(255,86,0,0.35)",
                alignSelf: "flex-start",
              }}
            >
              {t('contact_send')}
            </Button>
          </Box>
        </motion.div>
      </div>
    </div>
  );
}
