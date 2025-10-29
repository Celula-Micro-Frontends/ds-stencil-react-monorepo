import React from "react";
import { radius } from "../../tokens/radius";

export const BorderRadius: React.FC = () => {
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
        Border Radius Tokens
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {Object.entries(radius).map(([name, value]) => (
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
                width: "100%",
                height: "60px",
                backgroundColor: "#f5f5f5",
                borderRadius: `var(--${name}, ${value})`,
                border: "1px dashed #bbb",
                marginBottom: "1rem",
              }}
            ></div>

            <div
              style={{
                fontSize: "0.85rem",
                color: "#555",
                marginBottom: "0.25rem",
                wordBreak: "break-all",
              }}
            >
              --{name}
            </div>

            <div
              style={{
                fontSize: "0.9rem",
                color: "#000",
              }}
            >
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
