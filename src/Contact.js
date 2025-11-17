import { Typography, TextField, Button, Box } from "@mui/material";
import { Home, Phone, Email } from "@mui/icons-material";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full">
        <img
          alt="contact"
          src="./assets/images/hero2.png"
          className="w-full h-auto block"
        />
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "30%", md: "40%" },
            left: { xs: "40%", md: "20%" },
            transform: "translateX(-50%)",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            fontWeight: 500,
          }}
        >
          Contact Us
        </Typography>
      </div>

      {/* Map + Form */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start mt-10 gap-10 px-6">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51328.26146500116!2d2.758991357737963!3d36.48132138224532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0c66865a4cd1%3A0xccfcf9c073646dfe!2sBlida!5e0!3m2!1sfr!2sdz!4v1757093931658!5m2!1sfr!2sdz"
          className="w-full md:w-1/2 h-[400px]"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="blida"
        ></iframe>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <Typography variant="h5" fontWeight="bold">
            Get in Touch
          </Typography>

          <Box className="flex flex-col gap-4">
            <TextField label="Your Name" variant="outlined" fullWidth required />
            <TextField
              label="Your Email"
              type="email"
              variant="outlined"
              fullWidth
              required
            />
            <TextField label="Subject" variant="outlined" fullWidth required />
            <TextField
              label="Message"
              variant="outlined"
              multiline
              rows={5}
              fullWidth
              required
            />

            <Button
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: "orangered",
                "&:hover": { bgcolor: "darkred" },
                borderRadius: "0",
                px: 4,
              }}
            >
              SEND
            </Button>
          </Box>
        </div>
      </div>

      {/* Contact Info (NOW UNDER THE MAP + FORM) */}
      <Box className="w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-10 px-6">
        <Box className="flex items-start gap-3">
          <Home sx={{ color: "gray" }} />
          <div>
            <Typography fontWeight="bold">Buttonwood, California.</Typography>
            <Typography>Rosemead, CA 91770</Typography>
          </div>
        </Box>

        <Box className="flex items-start gap-3">
          <Phone sx={{ color: "gray" }} />
          <div>
            <Typography fontWeight="bold">+1 253 565 2365</Typography>
            <Typography>Mon to Fri 9am to 6pm</Typography>
          </div>
        </Box>

        <Box className="flex items-start gap-3">
          <Email sx={{ color: "gray" }} />
          <div>
            <Typography fontWeight="bold">support@colorlib.com</Typography>
            <Typography>Send us your query anytime!</Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
}
