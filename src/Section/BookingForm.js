import {
  Box,
  Button,
  MenuItem,
  Select,
  InputAdornment,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Alert,
  Collapse,
} from "@mui/material";
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const tableOptions = [
  { id: 1, name: "Window Table", description: "Enjoy a scenic view while you dine.", img: "./assets/images/table-01.jpg" },
  { id: 2, name: "Outdoor Terrace", description: "Al fresco dining in the open air.", img: "./assets/images/table-02.webp" },
  { id: 3, name: "VIP Private Room", description: "Exclusive ambiance for special occasions.", img: "./assets/images/table-03.jpg" },
];

const fieldStyle = {
  height: "56px",
  fontSize: "16px",
  backgroundColor: "#fff",
  borderRadius: "10px",
};

export default function BookingForm() {
  const [person, setPerson] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const isFormComplete = person && date && time;

  const handleSubmit = () => {
    if (!isFormComplete) return;
    setShowCards(true);
    setConfirmed(false);
    setSelectedCard(null);
  };

  const handleCardSelect = (table) => {
    setSelectedCard(table);
    setConfirmed(true);
  };

  const handleReset = () => {
    setPerson("");
    setDate(null);
    setTime(null);
    setShowCards(false);
    setSelectedCard(null);
    setConfirmed(false);
  };

  return (
    <div className="rounded-md mx-auto w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* Step 1: booking inputs */}
        {!showCards && (
          <Box display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="center">
            <Select
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "gray" }} />
                </InputAdornment>
              }
              sx={{ ...fieldStyle, flex: 1, minWidth: { xs: "100%", sm: "180px" } }}
            >
              <MenuItem value="">Guests</MenuItem>
              <MenuItem value="1">1 Person</MenuItem>
              <MenuItem value="2">2 Persons</MenuItem>
              <MenuItem value="3">3 Persons</MenuItem>
              <MenuItem value="4">4 Persons</MenuItem>
              <MenuItem value="5+">5+ Persons</MenuItem>
            </Select>

            <DatePicker
              value={date}
              onChange={(v) => setDate(v)}
              slots={{ openPickerIcon: EventIcon }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: { ...fieldStyle, flex: 1, minWidth: { xs: "100%", sm: "180px" } },
                },
              }}
            />

            <TimePicker
              value={time}
              onChange={(v) => setTime(v)}
              slots={{ openPickerIcon: AccessTimeIcon }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: { ...fieldStyle, flex: 1, minWidth: { xs: "100%", sm: "180px" } },
                },
              }}
            />

            <Button
              variant="contained"
              disabled={!isFormComplete}
              onClick={handleSubmit}
              sx={{
                bgcolor: "#ff5600",
                "&:hover": { bgcolor: "#e04a00" },
                "&:disabled": { bgcolor: "#ccc" },
                fontWeight: 700,
                fontFamily: "'Poppins', sans-serif",
                flex: 1,
                minWidth: { xs: "100%", sm: "160px" },
                height: "56px",
                borderRadius: "10px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Find a Table
            </Button>
          </Box>
        )}

        {/* Step 2: table selection */}
        {showCards && !confirmed && (
          <Box>
            <Typography sx={{ mb: 3, fontFamily: "'Poppins', sans-serif", color: "#6b7280", textAlign: "center" }}>
              Choose your preferred table â€” {date?.format("MMM D, YYYY")} at {time?.format("h:mm A")} for {person} guest{person !== "1" ? "s" : ""}
            </Typography>
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
              gap={2}
            >
              {tableOptions.map((table) => (
                <Card
                  key={table.id}
                  onClick={() => handleCardSelect(table)}
                  sx={{
                    cursor: "pointer",
                    borderRadius: "14px",
                    border: selectedCard?.id === table.id ? "2px solid #ff5600" : "1.5px solid rgba(0,0,0,0.08)",
                    transition: "all 0.3s ease",
                    "&:hover": { boxShadow: "0 8px 24px rgba(255,86,0,0.15)", transform: "translateY(-4px)" },
                  }}
                >
                  <CardMedia component="img" image={table.img} alt={table.name} sx={{ aspectRatio: "4/3", objectFit: "cover" }} />
                  <CardContent>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", mb: 0.5 }}>
                      {table.name}
                    </Typography>
                    <Typography sx={{ color: "#6b7280", fontSize: "0.85rem", fontFamily: "'Poppins', sans-serif" }}>
                      {table.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button onClick={handleReset} sx={{ color: "#6b7280", textTransform: "none", fontFamily: "'Poppins', sans-serif" }}>
                â† Start Over
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 3: confirmation */}
        <Collapse in={confirmed}>
          {selectedCard && (
            <Box sx={{ textAlign: "center", py: 4 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 56, color: "#ff5600", mb: 2 }} />
              <Alert
                severity="success"
                sx={{
                  borderRadius: "12px",
                  mb: 2,
                  fontFamily: "'Poppins', sans-serif",
                  bgcolor: "#fff5ed",
                  border: "1px solid #ff5600",
                  color: "#1e1e1e",
                  "& .MuiAlert-icon": { color: "#ff5600" },
                }}
              >
                <strong>Reservation confirmed!</strong> {selectedCard.name} on{" "}
                {date?.format("MMM D, YYYY")} at {time?.format("h:mm A")} for {person} guest{person !== "1" ? "s" : ""}.
                We look forward to seeing you at Savoria!
              </Alert>
              <Button
                onClick={handleReset}
                variant="outlined"
                sx={{
                  borderColor: "#ff5600",
                  color: "#ff5600",
                  textTransform: "none",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  borderRadius: "10px",
                  px: 3,
                  "&:hover": { bgcolor: "#ff5600", color: "#fff" },
                }}
              >
                Make Another Reservation
              </Button>
            </Box>
          )}
        </Collapse>
      </LocalizationProvider>
    </div>
  );
}

