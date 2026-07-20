import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/siteConfig";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#f4f2ec",
          }}
        >
          RAZA<span style={{ color: "#d4a73a", marginLeft: 24 }}>FITNESS HUB</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 34,
            color: "#a9a69c",
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            width: 200,
            height: 4,
            background: "#d4a73a",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
