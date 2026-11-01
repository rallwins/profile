import { ImageResponse } from "next/og";

export const alt = "Allwins Rajaiah, Director of Technology";
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
          background: "#1a365d",
          color: "#ffffff",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 24, fontWeight: 600, letterSpacing: 0.5 }}>allwinsrajaiah.com</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -1.5 }}>
            Allwins Rajaiah
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#d6e2f0" }}>
            Director of Technology · Engineering Leadership & Solutions Architecture
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
