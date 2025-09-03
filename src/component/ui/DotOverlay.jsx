import { useEffect, useRef } from "react";

export default function DotOverlay() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    overlay.innerHTML = ""; // clear previous dots

    const dotSize = 7; // px
    const gap = 50;    // px
    const spacing = dotSize + gap;  

    const width = overlay.offsetWidth;
    const height = overlay.offsetHeight;

    const cols = Math.ceil(width / spacing);
    const rows = Math.ceil(height / spacing);

    for (let y = 0; y <= rows; y++) {
      for (let x = 0; x <= cols; x++) {
        const dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.width = `${dotSize}px`;
        dot.style.height = `${dotSize}px`;
        dot.style.borderRadius = "50%";
        dot.style.background = "#0077B6";
        dot.style.left = `${x * spacing}px`;
        dot.style.top = `${y * spacing}px`;
        overlay.appendChild(dot);
      }
    }
  }, []);

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 pointer-events-none"
    />
  );
}
