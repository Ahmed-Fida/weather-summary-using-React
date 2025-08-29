import React from "react";

export default function ToggleButton({ darkMode, toggleBackground }) {
  return (
    <button
      onClick={toggleBackground}
      style={{
        marginTop: "20px",
        padding: "10px 15px",
        cursor: "pointer",
        borderRadius: "8px",
        border: "none",
        backgroundColor: darkMode ? "#555" : "#007bff",
        color: "#fff",
      }}
    >
      Toggle Background
    </button>
  );
}
