import { ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
}

export default function GlowCard({ children }: GlowCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative overflow-hidden rounded-2xl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px,
            rgba(59,130,246,.18),
            transparent 220px)`,
        }}
      />

      {children}
    </div>
  );
}