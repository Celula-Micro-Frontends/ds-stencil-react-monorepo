import React from "react";
import { typographics } from "../../tokens/typographics";
import { styles, weights } from "./constants";

export const Typography: React.FC = () => {
  const ntt = "ntt";
  const size = "-font-size-";
  const line = "-line-height-";

  // Generar CSS dinámico basado en los tokens
  const dynamicStyles = styles
    .map((style) =>
      weights
        .map((weight) => {
          const fontSize = typographics[`${ntt}${size}${style}`];
          const lineHeight = typographics[`${ntt}${line}${style}`];
          const fontWeight = typographics[`ntt-font-weigh-${weight}`];

          if (!fontSize || !lineHeight || !fontWeight) return "";

          return `
            .${ntt}-${style}-${weight} {
              font-size: ${fontSize};
              line-height: ${lineHeight};
              font-weight: ${fontWeight};
            }
          `;
        })
        .join("\n")
    )
    .join("\n");

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", padding: "1rem" }}>
      {/* inyectamos los estilos dinámicos */}
      <style>{dynamicStyles}</style>

      <h2 style={{ margin: "0 0 1.5rem 0", fontSize: "1.8rem", color: "#222" }}>
        Estilos Tipográficos (por clase)
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {styles.map((style) =>
          weights.map((weight) => {
            const className = `${ntt}-${style}-${weight}`;
            const fontSizeToken = typographics?.[`${ntt}${size}${style}`];
            const lineHeightToken = typographics?.[`${ntt}${line}${style}`];

            if (!fontSizeToken || !lineHeightToken) return null;

            return (
              <div
                key={className}
                style={{
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  padding: "1rem",
                  background: "#fff",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
                }}
              >
                <p className={className} style={{ marginBottom: "0.75rem" }}>
                  NTT DATA
                </p>

                <div style={{ fontSize: "0.9rem", wordBreak: "break-word" }}>
                  S.{fontSizeToken} - LH.{lineHeightToken}
                </div>

                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#333",
                    wordBreak: "break-word",
                  }}
                >
                  .{className}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
