import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

export default function Aboutt() {
  const { t } = useTranslation();

  return (
    <div
      style={{
        width: "100%",
        minHeight: "450px",
        backgroundImage: "url('./assets/images/about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "800px", padding: "0 20px" }}>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}>
          {t('aboutt_title')}
        </h2>
        <p className="mt-4 text-gray-200" style={{ fontFamily: "'Poppins', sans-serif", lineHeight: 1.75 }}>
          {t('aboutt_desc')}
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold" style={{ color: "#ff5600" }}>4.8/5</h3>
            <p className="text-gray-300 mt-1" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.95rem" }}>{t('aboutt_rating')}</p>
          </div>
          <div className="w-px bg-gray-600"></div>
          <div className="text-center">
            <h3 className="text-3xl font-bold" style={{ color: "#ff5600" }}>30+</h3>
            <p className="text-gray-300 mt-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{t('aboutt_awards')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
