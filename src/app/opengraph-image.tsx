import { ImageResponse } from "next/og";

export const alt = "Paul Philip — Frontend & Mobile Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Link-preview card for LinkedIn, X, WhatsApp, Slack, etc. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#000020",
          backgroundImage: "radial-gradient(circle at 18% 20%, rgba(29,78,216,0.45), rgba(0,0,32,0) 55%)",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#12e193", fontSize: 26 }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#12e193" }} />
          Open to frontend &amp; mobile roles
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -4, lineHeight: 1 }}>Paul Philip</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 20, color: "#cbd5e1" }}>
            Frontend <span style={{ color: "#12e193", margin: "0 12px" }}>&amp;</span> Mobile Engineer
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 26, color: "#94a3b8" }}>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>React Native</span>
          <span>·</span>
          <span>Expo</span>
          <span>·</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    size
  );
}
