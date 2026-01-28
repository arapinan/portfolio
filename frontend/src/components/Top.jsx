import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300); // show after scrolling down
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#home"
      style={{
        position: "fixed",
        right: "clamp(12px, 3vw, 24px)",
        bottom: "clamp(12px, 3vw, 24px)",
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: "#111",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        textDecoration: "none",
        fontSize: 18,
        opacity: 0.7,
        transition: "opacity 120ms ease, transform 120ms ease",
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = 1;
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = 0.7;
        e.currentTarget.style.transform = "none";
      }}
      aria-label="Back to top"
    >
      ↑
    </a>
  );
}
