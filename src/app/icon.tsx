import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070A",
          color: "#E23C14",
          fontSize: 11,
          fontWeight: 700,
        }}
      >
        EGL
      </div>
    ),
    size,
  );
}
