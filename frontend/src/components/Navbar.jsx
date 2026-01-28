import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f5f0e6",
        fontSize: "clamp(14px, 1.6vw, 18px)",
        width: "100%",
        borderBottom: "1px solid #FFFFFF",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <a href="#home" style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Home"
            style={{ height: "clamp(28px, 3vw, 36px)", width: "auto", display: "block" }}
          />
        </a>

        <a
          href="/resume.pdf"
          download
          style={{
            padding: "6px 14px",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.25)",
            textDecoration: "none",
            fontSize: "clamp(12px, 1.2vw, 14px)",
          }}
        >
          Download Resume
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
