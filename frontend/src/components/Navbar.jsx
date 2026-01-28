import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1000,
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#f5f0e6",
        fontSize: "clamp(14px, 1.6vw, 18px)",
        width: "100%",
        borderBottom: "1px solid #FFFFFF",
        alignItems: "center",
      }}
    >
      <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
            src={logo}
            alt="Home"
            style={{
                height: "clamp(28px, 3vw, 36px)",
                width: "auto",
                display: "block",
            }}
        />
      </NavLink>

      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <NavLink
          to="/education"
          style={({ isActive }) => ({
            fontWeight: isActive ? "700" : "400",
          })}
        >
          Education
        </NavLink>

        <NavLink
          to="/projects"
          style={({ isActive }) => ({
            fontWeight: isActive ? "700" : "400",
          })}
        >
          Projects
        </NavLink>

        <NavLink
          to="/skills"
          style={({ isActive }) => ({
            fontWeight: isActive ? "700" : "400",
          })}
        >
          Skills
        </NavLink>

        <NavLink
          to="/about"
          style={({ isActive }) => ({
            fontWeight: isActive ? "700" : "400",
          })}
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
