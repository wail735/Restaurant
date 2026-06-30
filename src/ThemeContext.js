import React, { createContext, useState, useMemo, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export default function CustomThemeProvider({ children }) {
  const [mode, setMode] = useState("light");
  const { i18n } = useTranslation();

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode) setMode(savedMode);
  }, []);

  useEffect(() => {
    localStorage.setItem("themeMode", mode);
  }, [mode]);

  const isRtl = i18n.language === "ar";

  useEffect(() => {
    document.dir = isRtl ? "rtl" : "ltr";
  }, [isRtl]);

  const theme = useMemo(
    () =>
      createTheme({
        direction: isRtl ? "rtl" : "ltr",
        palette: {
          mode,
          primary: {
            main: "#ff5600",
          },
          background: {
            default: mode === "dark" ? "#0f0f0f" : "#fffbf7",
            paper: mode === "dark" ? "#1a1a1a" : "#ffffff",
          },
          text: {
            primary: mode === "dark" ? "#f3f4f6" : "#1e1e1e",
            secondary: mode === "dark" ? "#9ca3af" : "#6b7280",
          },
        },
        typography: {
          fontFamily: "'Poppins', sans-serif",
        },
      }),
    [mode, isRtl]
  );

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const cacheLtr = createCache({
    key: "muiltr",
  });

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <CacheProvider value={isRtl ? cacheRtl : cacheLtr}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
}
