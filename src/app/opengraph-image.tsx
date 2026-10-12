import { ImageResponse } from "next/og";

export const alt = "Allwins Rajaiah, Solutions Architect and Director of Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f2f4f7",
          color: "#1c1e21",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            background: "#1b4fbf",
            color: "#ffffff",
            borderRadius: 999,
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: 1.5,
            padding: "10px 18px",
          }}
        >
          ALLWINSRAJAIAH.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Allwins Rajaiah
          </div>
          <div style={{ marginTop: 24, fontSize: 26, color: "#5c6570" }}>
            Solutions Architect · Director of Technology · AI · Cloud · Data
          </div>
        </div>
        <div style={{ width: 72, height: 12, borderRadius: 999, background: "#1b4fbf" }} />
      </div>
    ),
    { ...size },
  );
}
