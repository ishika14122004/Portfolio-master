"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  const trailLength = 8;
  const speed = 0.25;

  const [hovering, setHovering] = useState(false);

  const positions = useRef(
    Array.from({ length: trailLength }, () => ({ x: 0, y: 0 }))
  );

  // 🎨 Cursor Settings
  const cursorColor = "#AD49E1";
  const glowColor = "rgba(192, 132, 252, 1)";

  const cursorSize = 12;
  const trailSize = 10;

  const normalGlow = 10; // blur when normal
  const hoverGlow = 20;  // blur when hovering

  useEffect(() => {
    const handleMouseMove = (e) => {
      positions.current[0] = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("a, button, [data-hover='true']")) {
        setHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (target.closest("a, button, [data-hover='true']")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      const pos = positions.current;

      for (let i = 1; i < trailLength; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * (speed - i * 0.005);
        pos[i].y += (pos[i - 1].y - pos[i].y) * (speed - i * 0.005);
      }

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos[0].x}px, ${pos[0].y}px)`;
        cursorRef.current.style.boxShadow = `0 0 ${hovering ? hoverGlow : normalGlow}px ${glowColor}`;
      }

      trailRefs.current.forEach((trail, i) => {
        if (!trail) return;
        const { x, y } = pos[i + 1] || pos[pos.length - 1];
        const scale = 1 - i * 0.05;
        const opacity = 1 - i * 0.08;

        trail.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        trail.style.opacity = `${opacity}`;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hovering]);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          backgroundColor: cursorColor,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-100px, -100px)",
          zIndex: 9999,
          transition: "box-shadow 0.2s ease",
        }}
      />

      {/* Trail */}
      {Array.from({ length: trailLength - 1 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: `${trailSize}px`,
            height: `${trailSize}px`,
            backgroundColor: cursorColor,
            borderRadius: "50%",
            pointerEvents: "none",
            transform: "translate(-100px, -100px)",
            zIndex: 9998,
            transition: "transform 0.08s ease",
            filter: "blur(1.5px)",
          }}
        />
      ))}
    </>
  );
}
