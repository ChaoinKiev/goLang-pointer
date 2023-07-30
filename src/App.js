/** @format */

import { useState } from "react";

export default function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      onPointerMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "none",
      }}>
      <div
        style={{
          position: "absolute",
          backgroundImage: `url(go-logo.svg)`,
          backgroundSize: "contain",
          width: "12.8px",
          height: "17.4px",
          pointerEvents: "none",
          transform: `translate(${position.x - 6.4}px, ${position.y - 8.7}px)`, // Center the pointer on the pointer position
          zIndex: 9999,
        }}
      />
    </div>
  );
}
