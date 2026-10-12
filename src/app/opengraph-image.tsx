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
          background: "#e7eef2",
          color: "#142028",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 18, letterSpacing: 6, color: "#1f4e5f" }}>
          ALLWINSRAJAIAH.COM
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, lineHeight: 0.95, fontStyle: "italic" }}>Allwins Rajaiah</div>
          <div style={{ marginTop: 28, fontSize: 26, color: "#3d4c57" }}>
            Solutions Architect · Director of Technology · AI · Cloud · Data
          </div>
        </div>
        <div style={{ width: 120, height: 6, background: "#1f4e5f" }} />
      </div>
    ),
    { ...size },
  );
}
