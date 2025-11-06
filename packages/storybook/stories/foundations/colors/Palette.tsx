import React from "react";
import { colors } from "../../tokens/colors";

export const Palette: React.FC = () => {
  const groups: Record<string, (name: string) => boolean> = {
    Brand: (name) => /brand/.test(name),
    Davidienda: (name) => /davidienda/.test(name),
    Primary: (name) => /primary/.test(name),
    Secondary: (name) => /secondary/.test(name),
    Terciary: (name) => /tertiary/.test(name),
    Dark: (name) => /dark/.test(name),
    Mid: (name) => /mid/.test(name),
    Light: (name) => /light/.test(name),
    Warning: (name) => /warning/.test(name),
    Error: (name) => /error/.test(name),
    Success: (name) => /success/.test(name),
    Info: (name) => /info/.test(name),
  };

  return (
    <div>
      {Object.entries(groups).map(([groupName, condition]) => {
        const groupColors = Object.entries(colors || {}).filter(([name]) =>
          condition(name)
        );

        if (groupColors.length === 0) return null;

        return (
          <div key={groupName}>
            <h3
              style={{
                margin: "2rem 0 1rem",
                fontFamily: "sans-serif",
                fontSize: "1.2rem",
              }}
            >
              {groupName}
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                gap: "1rem",
              }}
            >
              {groupColors.map(([name, value]) => (
                <div
                  key={name}
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: `var(--${name}, ${value})`,
                      height: "60px",
                      borderRadius: "4px",
                    }}
                  />
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#666",
                      marginTop: "4px",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginTop: "2px",
                    }}
                  >
                    {name.replace(/^bpop-designio-color-/, "")}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#999",
                    }}
                  >
                    --{name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
