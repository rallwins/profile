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
          background: "#f4f1ea",
          color: "#14161c",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 4, color: "#2436b0" }}>PROFILE</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1 }}>Allwins Rajaiah</div>
          <div style={{ marginTop: 24, fontSize: 28, fontFamily: "sans-serif", color: "#3e4754" }}>
            Solutions Architect · Director of Technology · AI · Cloud · Data
          </div>
        </div>
        <div style={{ fontSize: 22, fontFamily: "sans-serif" }}>profile.allwinsrajaiah.com</div>
      </div>
    ),
    { ...size },
  );
}
