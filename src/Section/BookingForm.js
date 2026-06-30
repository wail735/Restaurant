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
  useTheme
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
import { useTranslation } from "react-i18next";

export default function BookingForm() {
  const { t } = useTranslation();
  const theme = useTheme();

  const [person, setPerson] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [showCards, setShowCards] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [confirmed, setConfirmed] = useState(false);

  const tableOptions = [
    { id: 1, name: t('table1_name'), description: t('table1_desc'), img: "./assets/images/table-01.jpg" },
    { id: 2, name: t('table2_name'), description: t('table2_desc'), img: "./assets/images/table-02.webp" },
    { id: 3, name: t('table3_name'), description: t('table3_desc'), img: "./assets/images/table-03.jpg" },
  ];

  const fieldStyle = {
    height: "56px",
    fontSize: "16px",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: "10px",
  };

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
              <MenuItem value="">{t('guests')}</MenuItem>
              <MenuItem value="1">1 {t('person')}</MenuItem>
              <MenuItem value="2">2 {t('persons')}</MenuItem>
              <MenuItem value="3">3 {t('persons')}</MenuItem>
              <MenuItem value="4">4 {t('persons')}</MenuItem>
              <MenuItem value="5+">5+ {t('persons')}</MenuItem>
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
                color: "#fff",
                "&:hover": { bgcolor: "#e04a00" },
                "&:disabled": { bgcolor: theme.palette.action.disabledBackground, color: theme.palette.action.disabled },
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
              {t('btn_find_table')}
            </Button>
          </Box>
        )}

        {/* Step 2: table selection */}
        {showCards && !confirmed && (
          <Box>
            <Typography sx={{ mb: 3, fontFamily: "'Poppins', sans-serif", color: theme.palette.text.secondary, textAlign: "center", bgcolor: theme.palette.background.paper, p: 2, borderRadius: 2 }}>
              {t('choose_table')} — {date?.format("MMM D, YYYY")} {t('at')} {time?.format("h:mm A")} {t('for')} {person} {person !== "1" ? t('persons') : t('person')}
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
                    bgcolor: theme.palette.background.paper,
                    border: selectedCard?.id === table.id ? "2px solid #ff5600" : `1.5px solid ${theme.palette.divider}`,
                    transition: "all 0.3s ease",
                    "&:hover": { boxShadow: "0 8px 24px rgba(255,86,0,0.15)", transform: "translateY(-4px)" },
                  }}
                >
                  <CardMedia component="img" image={table.img} alt={table.name} sx={{ aspectRatio: "4/3", objectFit: "cover" }} />
                  <CardContent>
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "1rem", mb: 0.5, color: theme.palette.text.primary }}>
                      {table.name}
                    </Typography>
                    <Typography sx={{ color: theme.palette.text.secondary, fontSize: "0.85rem", fontFamily: "'Poppins', sans-serif" }}>
                      {table.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button onClick={handleReset} sx={{ color: theme.palette.text.secondary, textTransform: "none", fontFamily: "'Poppins', sans-serif", bgcolor: theme.palette.background.paper }}>
                {t('start_over')}
              </Button>
            </Box>
          </Box>
        )}

        {/* Step 3: confirmation */}
        <Collapse in={confirmed}>
          {selectedCard && (
            <Box sx={{ textAlign: "center", py: 4, bgcolor: theme.palette.background.paper, borderRadius: 3, mt: 2 }}>
              <CheckCircleOutlineIcon sx={{ fontSize: 56, color: "#ff5600", mb: 2 }} />
              <Alert
                severity="success"
                sx={{
                  borderRadius: "12px",
                  mb: 2,
                  fontFamily: "'Poppins', sans-serif",
                  bgcolor: theme.palette.mode === 'dark' ? "rgba(255,86,0,0.1)" : "#fff5ed",
                  border: "1px solid #ff5600",
                  color: theme.palette.text.primary,
                  "& .MuiAlert-icon": { color: "#ff5600" },
                }}
              >
                <strong>{t('reservation_confirmed')}</strong> {selectedCard.name} {t('on')}{" "}
                {date?.format("MMM D, YYYY")} {t('at')} {time?.format("h:mm A")} {t('for')} {person} {person !== "1" ? t('persons') : t('person')}.
                <br/>{t('look_forward')}
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
                {t('make_another')}
              </Button>
            </Box>
          )}
        </Collapse>
      </LocalizationProvider>
    </div>
  );
}
