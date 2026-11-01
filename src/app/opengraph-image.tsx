import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { impactMetrics, profile } from "../../content/profile";

export const alt = "Allwins Rajaiah, Director of Technology";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#18181c";
const slate = "#4a4a52";
const accent = "#1f4bb8";
const line = "rgba(24, 24, 28, 0.13)";
const emphasis = "enterprise platforms.";

export default async function OpenGraphImage() {
  const [youngSerif, figtree, avatar] = await Promise.all([
    readFile(join(process.cwd(), "src/app/og-fonts/YoungSerif-Regular.ttf")),
    readFile(join(process.cwd(), "src/app/og-fonts/Figtree-Medium.ttf")),
    readFile(join(process.cwd(), "public/avatar.png"), "base64"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 64px",
          color: ink,
          fontFamily: "Figtree",
          backgroundColor: "#fbfbfb",
          backgroundImage: `linear-gradient(${line} 1px, transparent 1px), linear-gradient(90deg, ${line} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`data:image/png;base64,${avatar}`} alt="" width={64} height={64} style={{ borderRadius: 32 }} />
          <div style={{ display: "flex", marginLeft: 20, color: ink }}>{profile.name}</div>
          <div style={{ display: "flex", marginLeft: 16, color: slate }}>/ {profile.role}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Young Serif", fontSize: 72, lineHeight: 1.08 }}>
          <div style={{ display: "flex" }}>{profile.headline.replace(emphasis, "").trim()}</div>
          <div style={{ display: "flex", color: accent }}>{emphasis}</div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {impactMetrics.map((metric) => (
            <div
              key={metric.figure}
              style={{
                display: "flex",
                flexDirection: "column",
                width: 256,
                padding: "16px 20px",
                backgroundColor: "#ffffff",
                border: `1px solid ${line}`,
                borderRadius: 12,
              }}
            >
              <div style={{ display: "flex", fontFamily: "Young Serif", fontSize: 44, lineHeight: 1, color: accent }}>
                {metric.figure}
              </div>
              <div style={{ display: "flex", marginTop: 8, fontSize: 21, lineHeight: 1.2, color: ink }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Young Serif", data: youngSerif, weight: 400, style: "normal" },
        { name: "Figtree", data: figtree, weight: 500, style: "normal" },
      ],
    },
  );
}
