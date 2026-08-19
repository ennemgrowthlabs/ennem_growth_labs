import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#05070A",
          color: "white",
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 8, color: "#22D3EE" }}>THENI · LABS</div>
        <div style={{ fontSize: 72, marginTop: 24, fontWeight: 700 }}>ENNEM GROWTH LABS</div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#E23C14" }}>Build. Automate. Grow.</div>
      </div>
    ),
    size,
  );
}
