import React from "react";
import { spacings } from "../../tokens/spacings";

export const Spacing: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        padding: "1rem",
      }}
    >
      <h2
        style={{
          margin: "0 0 1.5rem 0",
          fontSize: "1.8rem",
          color: "#222",
        }}
      >
        Spacing Tokens
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {Object.entries(spacings).map(([name, value]) => (
          <div
            key={name}
            style={{
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "1rem",
              background: "#fff",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
            }}
          >
            <div
              style={{
                fontSize: "0.85rem",
                color: "#555",
                marginBottom: "0.5rem",
                wordBreak: "break-word",
              }}
            >
              --{name}
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                color: "#000",
                marginBottom: "0.5rem",
              }}
            >
              {value}
            </div>

            <div
              style={{
                height: "20px",
                width: value,
                backgroundColor: "#2070e8",
                borderRadius: "4px",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
