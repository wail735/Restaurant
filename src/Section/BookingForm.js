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

export default function BookingForm() {
  const [person, setPerson] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const tableOptions = [
    {
      id: 1,
      name: "Une table à côté de la fenêtre",
      img: "./assets/images/table-01.jpg",
    },
    {
      id: 2,
      name: "Table à l'extérieur",
      img: "./assets/images/table-02.webp",
    },
    { id: 3, name: "Table VIP", img: "./assets/images/table-03.jpg" },
  ];

  const fieldStyle = {
    height: "56px",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    borderRadius: "6px",
  };
  const isFormComplete = person && date && time;

  const handleSubmit = () => {
    if (!isFormComplete) return;
    setShowCards(true);
  };

  const handleCardSelect = (card) => {
    setSelectedCard(card);
    alert(
      `✅ تم اختيار: ${card.name}\n📅 ${date.format(
        "YYYY-MM-DD"
      )} ⏰ ${time.format("HH:mm")} 👥 ${person} أشخاص`
    );
  };

  return (
    <div className="rounded-md mx-auto w-full">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {!showCards ? (
          <Box
            display="flex"
            flexWrap="wrap"
            gap={2}
            alignItems="center"
            justifyContent="center"
          >
            {/* Person */}
            <Select
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              displayEmpty
              startAdornment={
                <InputAdornment position="start">
                  <PersonIcon sx={{ color: "gray" }} />
                </InputAdornment>
              }
              sx={{
                ...fieldStyle,
                flex: 1,
                minWidth: { xs: "100%", sm: "200px" },
              }}
            >
              <MenuItem value="">Person</MenuItem>
              <MenuItem value="1">1 Person</MenuItem>
              <MenuItem value="2">2 Persons</MenuItem>
              <MenuItem value="3">3 Persons</MenuItem>
              <MenuItem value="4">4 Persons</MenuItem>
            </Select>

            {/* Date */}
            <DatePicker
              value={date}
              onChange={(newValue) => setDate(newValue)}
              slots={{ openPickerIcon: EventIcon }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: {
                    ...fieldStyle,
                    flex: 1,
                    minWidth: { xs: "100%", sm: "200px" },
                  },
                },
              }}
            />

            {/* Time */}
            <TimePicker
              value={time}
              onChange={(newValue) => setTime(newValue)}
              slots={{ openPickerIcon: AccessTimeIcon }}
              slotProps={{
                textField: {
                  fullWidth: true,
                  sx: {
                    ...fieldStyle,
                    flex: 1,
                    minWidth: { xs: "100%", sm: "200px" },
                  },
                },
              }}
            />

            {/* Book Now */}
            <Button
              variant="contained"
              disabled={!isFormComplete}
              onClick={handleSubmit}
              sx={{
                bgcolor: "#ff5600",
                "&:hover": { bgcolor: "#ff7300" },
                fontWeight: "bold",
                flex: 1,
                minWidth: { xs: "100%", sm: "200px" },
                height: "56px",
              }}
            >
              Book Now
            </Button>
          </Box>
        ) : (
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            }}
            gap={2}
            mt={4}
            px={{ xs: 1, sm: 2 }}
          >
            {tableOptions.map((table) => (
              <Card
                key={table.id}
                onClick={() => handleCardSelect(table)}
                sx={{
                  cursor: "pointer",
                  border:
                    selectedCard?.id === table.id
                      ? "3px solid #ff5600"
                      : "1px solid #ccc",
                  transition: "0.3s",
                  "&:hover": { boxShadow: 4 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={table.img}
                  alt={table.name}
                  sx={{
                    aspectRatio: "4/3",
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {table.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    📅 {date.format("YYYY-MM-DD")} | ⏰ {time.format("HH:mm")} |
                    👥 {person} أشخاص
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </LocalizationProvider>
    </div>
  );
}
